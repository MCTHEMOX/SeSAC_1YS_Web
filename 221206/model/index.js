const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];   //js파일은 확장자 안적음."development"만 가져옴

// "development" : {   
//     "host" : "localhost",
//     "database" : "test",
//     "username" : "user",
//     "password" : "1q2w3e4r",
//     "dialect" : "mysql"
// }, 

const db = {};

const sequelize = new Sequelize(   //인자4개   1.데이터베이스이름 2.user이름 3.password 4.정보 전체
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize,
//     "Visitor"  : "Visitor.js에서 return 받은 값"
// }

module.exports = db;