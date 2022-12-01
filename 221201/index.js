const express = require("express");
const app = express();
const port = 8080; 

app.set('view engine','ejs');
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes/index");

app.use('/',router);


// app.get("/b", function(req,res) {
//     res.render("b");
// });

// app.post("/form2", function(req,res){
//     console.log(req.body);
//     if (req.body.id == "asd" && req.body.pw == "asd"){
//         res.send("<p style ='color:blue'>성공</p>");
//     } 
//     else {
//         res.send("<p style ='color:red'>실패</p>");
//     }       
// })

app.get('*',(req,res)=>{ //별은 모든라우터,  마지막에 정의해야함.
    res.send('error 주소없음');
})

app.listen( port,()=>{
    console.log("sever open : ", port);
});