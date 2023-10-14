const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    titre :{ 
     type:   String
    },
    optionId :[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"optionSchema",   
    },]
    

});

const question = mongoose.model("question",questionSchema);
module.exports = question;