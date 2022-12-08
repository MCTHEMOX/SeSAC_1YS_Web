const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(cookieParser());



app.get("/", (req,res)=>{
    //if (req.cookies.test) res.render("ejs파일",{ popop: "none"})
    //else { res.render}
    
    res.send("asd");
})


const option = {
    httpOnly : true, //브라우저 상에서 test쿠키에 대해서 document.cookies로 찍어도 보이지않음.자바스크립트로 쿠키조작을 막음
    maxAge : 5000 ,//만들어진 순간부터 초만큼 뒤에 만료됨 (ms 단위) ex)3000 - 3초
    //expires : "2022-12-09T09:00:00" ,// 만료일 GMT 시간 2022-12-09T09:00:00 9일 아침9시
    //path : "/a"  // localhost:8000 에는 쿠키가 없음 localhost:8000/a/~~ 에는 있음, 기본값 "/"
    //secure : false, // true일 경우 https 보안서버에만 적용됨
    //signed : true // 쿠키의 암호화 하냐 안하냐. 기본값 false
}

app.get("/set", (req,res)=>{
    res.cookie("test", "1", option);   //("key", "value", 옵션객체)
    res.send("쿠키 생성 성공");
});

app.get("/get", (req,res)=>{ 
    console.log(req.cookies); //req로 쿠키 가져옴
    console.log(req.cookies.test);
    res.send(req.cookies);
})


const option2 = {
    httpOnly : false,
    maxAge : 60*60*24*1000
}

app.post("/setpopup", (req,res)=>{
    //1.쿠키를 만든다. 오늘하루 열지않음을 클릭했음을 구분하는 쿠키생성 ex. {popup : 1}
    //2.서버 응답
    // req.cookies.popup 을 가져왔을때 1이 아니면 팝업을 보여줌
    res.cookie("popup","1", option2);
    res.send(true);
})


app.get("/modal", (req,res) => {
    if(req.cookies.popup == "1") res.render("index", {popup: "none"});
    else res.render("index", {popup: "block"});
    res.cookie("modal", "1", option2) ;
    res.render("index");
});

app.listen(port, () => {
    console.log("server open", port);
})

//쿠키1 만약 쿠키카 1이면 뜨고 쿠키가 2이면 안뜸 