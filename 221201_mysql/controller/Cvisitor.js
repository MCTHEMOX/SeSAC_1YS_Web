const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
    Visitor.get_visitor(function(result){
        console.log(result); //콜백 cb
        res.render("visitor", { data: result});
    }); //rows의결과값을 result에
}
// 위변수 visitor에서 모델의 .get_visitor 가져옴
exports.register = (req,res) =>{
    Visitor.register_visitor( req.body,function(id){
        console.log(id);
        res.send(String(id));
    })
}

exports.delete = ( req,res) => {
    // my sql req.body.id에 해당하는 데이터를 delete  - 모델
    // 서버 응답 res.send
    Visitor.delete_visitor(req.body.id, function(){
        res.send(true);        
    })
}

exports.get_visitor_by_id = (req,res) =>{
    // req.qurey.id에 해당하는 데이터를 조회해서 
    //서버응답 - 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){
        res.send(rows);
    });
}

exports.update_visitor = (req, res) => {
    // req.body 데이터를 mysql에 update할 수 있도록
    // 서버의 응답 
    Visitor.update_visitor(req.body, function(){
        res.send(true);
    });
}