const Visitor = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "visitor", // create table visitor( )    -mysql
        {
            id : { // id int not null primary key auto_increment
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            name : { //name varchar(10) not null
                type : DataTypes.STRING(10),
                allowNull : false
            },
            comment : { //comment mediumtext
                type : DataTypes.TEXT('medium') 
    
            }


        },
        {
            tableName: "visitor", //select * from visitors; 자동으로 s붙임 이걸 방지하기위해 freeze씀 
            freezeTableName : true,
            timestamps : false // default true    테이블에 데이터가 생성될 때 마다. 수정,생성시간이 생김. 이거막음
        }   //collate, charset : UTF8 한글인코딩. 이미 데이터베이스에 설정해놔서 필요없음
    ) //인자 3개 1.모델이름   3.모델 옵션 정의
}

module.exports = Visitor; //model/index.js에서 해올거임