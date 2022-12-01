const test = require("../model/test");



exports.main = (req, res) => {
    let hi = test.hello();
    //res.render("index");
    res.send(hi);
}

exports.test = (req, res) => {
    res.send("test");
}

exports.a = (req, res) => {
    res.render("b");
}
exports.form2 = (req, res) => {
    console.log(req.body);
     if (req.body.id == "asd" && req.body.pw == "asd"){
         res.send("<p style ='color:blue'>성공</p>");
     } 
     else {
         res.send("<p style ='color:red'>실패</p>");
     }       
 };



 
// const user = require("../model/user")
// exports.login = (req,res) => {
//     res.render("login");
// }

// exports.loginPost = (req,res) => {
//     let info = user.user
//     if(req.body.id == info.id && req.body.pw == info.pw) res.send( "로그인 성공");
//     else res.send("로그인 실패");
// }



// module.exports=={
//     main: main,
//     test: test,
//     post: post
// }