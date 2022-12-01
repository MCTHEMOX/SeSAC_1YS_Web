var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();
//
router.get("/", controller.main);
router.get("/test", controller.test);


router.get("/a", controller.a);
router.post("/form2",controller.form2);
//
module.exports = router;