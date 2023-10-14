const mongoose = require("mongoose");

const optionSchema =new mongoose.Schema({
    text : {
        type:String,
    },
    estCorrect :{
        type : String
    }
});

const option = mongoose.model("option",optionSchema);
module.exports = option ;