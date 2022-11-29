const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1q2w3e4r",
    database: "test"
});

cnn.query('select * from user', (err,result)=>{
    if (err) throw err;

    console.log(result);
});