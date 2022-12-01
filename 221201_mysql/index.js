const express = require("express");
const app = express();
const port = 8080; 

app.set('view engine','ejs');
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const router = require("./routes");
app.use('/visitor',router);


app.get('*',(req,res)=>{ //별은 모든라우터,  마지막에 정의해야함.
    res.send('error 주소없음');
})

app.listen( port,()=>{
    console.log("sever open : ", port);
});