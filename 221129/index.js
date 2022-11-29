const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080; 
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1q2w3e4r",
    database: "test"
});


app.set('view engine','ejs');

app.get('/',(req, res)=>{
    cnn.query('select id,name,gender,age from user order by name ASC;', (err,result)=>{
        if (err) throw err;
        console.log(result);
        res.render("index",{rows:result});
    });
});

app.listen( port,()=>{
    console.log("sever open : ", port);
});