const express = require("express");
const session = require("express-session");
const app = express();

const port = 8000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(session({
    secret: '1234', //임의의 문자열로 세션을 암호화함
    resave: false,  // true 모든 요청마다 세션에 변화가 없어도 세션을 다시 저장함.
    saveUninitialized: true,// 초기화되지 않은 세션을 저장하냐 마냐
    //    cookie : {    session id 쿠키에 대한 옵션
    //     httpOnly : true,
    //     maxAge :
    // }
    // secure : //true 보안서버에서만 작동
}))
app.get("/",(req,res)=>{
    // if(req.session.user) res.render("index", {isLogin: true })
    // else res.render("index", {isLogin: false})
    res.render("index");
})



app.post("/login", (req,res)=>{
    if(req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        res.send("로그인성공");
    }
    else {
        res.send("로그인실패");
    }
})

app.get("/setSession",(req,res)=>{
//    cookies = { }
    req.session.user = "id";
    res.send("세션 생성 성공")
})


const user = { id: 'a', pw: 'a'};

app.get("/form2",(req,res)=>{
    res.render("login")
})

app.post("/form", (req,res)=>{
    if(req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        res.send("성공");
    }
    else {
        res.send("실패");
    }
})
app.post('/logout',function(req, res){
    req.session.destroy(function(err){
        if (err) throw err;
        res.send('x');        
    });
});

app.listen(port, () => {
    console.log("server open", port);
})