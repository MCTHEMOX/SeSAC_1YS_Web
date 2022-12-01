const express = require("express");
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8080; 

app.use("/uploads", express.static("uploads")); // 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true})); 
app.use(express.json());

const upload = multer({           //multer은 파일 업로드를 위해 사용되는 node.js의 미들웨어
    storage: multer.diskStorage({
        destination(req,file,done){
            done( null, 'uploads/');  
        },
        filename(req,file,done){
            console.log( "filename :", req.body );
            const ext = path.extname(file.originalname); //바나나.jpg
            const filename = req.body.name + ext; // 1231231232.jpg
            done( null, filename );
        }
    })        
});
app.get("/file", (req,res) => {
    res.render("file");
});
app.get("/a", (req,res) => {
    res.render("a");
});
app.post("/a", upload.single("userfile"), (req,res) => { 
    // upload.single()이미 만들어져있는 미들웨어 가져와서쓴거, 
    //파일 하나만 보냄
    console.log( req.file );
    console.log( req.body );
    // req.file.path = 실제 파일이 업로드된 경로
    // uploads/~
    res.render("b", { path: req.file.path } );
});
app.post("/upload-array", upload.array("userfile"), (req,res) => { 
    //한번에 여러개 보냄
    console.log( req.files );  //멀티플은 files
    console.log( req.body );
    res.send( "파일 한개 이상 보냈음" );    
});
app.post("/upload-fields",  //한개씩 여러개 보냄
    upload.fields([{name:"userfile1"}, {name:"userfile2"}, {name:"userfile3"}]), (req,res) => {
    console.log( req.files ); 
    console.log( req.body );
    res.send( "파일 각각 보냈음" );    
});


app.get("/", test, test2, (req,res) => {
    console.log("hello")
    res.send("Hello");
});

function test(req, res, next) {    //미들웨어함수에선 3개가능
    console.log( req.query );
    console.log("test 함수입니다.");
    next(); // test미들웨어 함수가 끝났고, 그 다음을 진행해라.
}

function test2(req, res, next) {
    console.log("test2 함수입니다.");
    next();
}

app.get("/register2", (req,res) => {
    res.render("practice36");
});
app.post("/register2", upload.single("userfile"), (req,res) => {
    res.send({ path: req.file.path } );
});



app.listen( port,()=>{
    console.log("sever open : ", port);
});
