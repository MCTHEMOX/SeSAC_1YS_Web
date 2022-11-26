const express = require("express");
const app = express();
const port = 8080; 

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true})); 
app.use(express.json());

app.get("/", function(req,res) {
    res.render("index");
})
app.get("/form", function(req,res){
    console.log(req.query);
    res.send(
        "이름 : " + req.query.name +
        "\n성별은 : " + req.query.gender +
        "\n년 : " + req.query.년 +
        "\n월 : " + req.query.월 +
        "\n일 : " + req.query.일 )
})
// 겟은 쿼리로 받음
app.post("/form", function(req,res){
    console.log(req.body);
    res.send(
        "이름 : " + req.query.name +
        "\n성별은 : " + req.query.gender +
        "\n년 : " + req.query.년 +
        "\n월 : " + req.query.월 +
        "\n일 : " + req.query.일 )
})

app.post("/form2", function(req,res){
    console.log(req.body);
    if (req.body.id == "asd" && req.body.pw == "asd"){
        res.send("<p style ='color:blue'>성공</p>");
    } 
    else {
        res.send("<p style ='color:red'>실패</p>");
    }       
})
//포스트는 body로 받음

app.get("/a", function(req,res) {
    res.render("a");
});

app.get("/b", function(req,res) {
    res.render("b");
});




app.listen( port,()=>{
    console.log("sever open : ", port);
});
