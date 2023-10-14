const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
   titre:{
      type :String ,
   },
 questionId :[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"questionSchema",
    required : true
 },]
});

const quiz = mongoose.model("quiz",quizSchema);
module.exports = quiz ;