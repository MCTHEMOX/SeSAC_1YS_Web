const express = require("express");
const app = express();
const port = 8080; //8080 3000 8000

app.set('view engine', 'ejs');
//views 폴더가 기본 디렉터리가 됨

app.use("/public", express.static("static")); // /public=가상경로실제로, 존재하는 폴더명stactic
// static이라는 실제 존재 폴더를 public 경로로 접근할 수 있도록 함
// public 말고 아무거나 써도 됨. 헷갈리지않게 실제 폴더명과 같이 쓰는게 편함.
// src="/public/img/cat.jpg"

app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); // json : 딕셔너리 형태와 비슷

//localhost:8000
app.get('/',(req, res)=>{
    res.send("hello express");
})

//localhost:8000/test
app.get('/test',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html"); //절대경로를 써줘야 함, 그러나 __dirname 쓰면 여기까지폴더경로 온다
})

app.get('/ejs',(req,res)=>{
    res.render( "index" ,{
        title: "index 페이지 입니다."
        
    });
})
 //뷰엔진으로 설정하면 확장자를 사용하지 않아도 된다. 알아서 ejs찾아감 


app.get('/img',(req,res)=>{
    res.render( "img" ,{
        data: ["public/img/1.jpg","public/img/2.jpg","public/img/3.jpg" ]
    });
});
        
app.get("/form",(req,res)=>{
    res.render( "form" );
})

app.get("/getForm",(req,res)=>{
    console.log(req.query);
    res.send("get 요청 성공");
})

app.post("/postForm",(req,res)=>{
    console.log(req.body);
    res.render("result", {data: req.body});
})

app.get("/fo",(req,res)=>{
    res.render( "fo" );
})
app.post("/postForm2",(req,res)=>{
    console.log(req.body);
    res.render("result2", {data: req.body});
})


app.listen( port,()=>{
    console.log("sever open : ", port);
})

