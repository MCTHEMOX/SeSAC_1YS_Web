var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/",controller.visitor);
// localhost:8000/visitor
router.post("/register", controller.register);
//localhost:8000/visitor/register
router.delete("/delete", controller.delete);
router.get("/get_visitor", controller.get_visitor_by_id);
router.patch("/update", controller.update_visitor);
module.exports = router;

//컨트롤러에서 함수 가져옴
//함수 만들어져 있는것만 가져와야 오류안남.