const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1q2w3e4r',
    database: 'test'
});

exports.get_visitor = (cb) => {
    var sql = 'SELECT * FROM visitor';
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("visitors : ", rows);

        cb(rows);
    })
}

exports.register_visitor = (info, cb) => {
    //info = req.body; {name : , comment: }
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}');`;
    cnn.query(sql, (err, result) => {
        if(err) throw err;

        console.log("insert result:",result);
        cb(result.insertId)
    })
}
