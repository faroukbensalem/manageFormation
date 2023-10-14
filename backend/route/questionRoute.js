const express = require("express");
const router = express.Router();
const questionController = require("../controller/questionController");
const QuizController = require("../controller/QuizController")
router.get("/:id",questionController.getOptionByQuestion);
router.post("/" , questionController.addOption);
router.post("/addQu",QuizController.addQuestion);
//router.delete("/:id",questionController.deleteOption);

module.exports = router  ; 