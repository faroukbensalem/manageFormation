const mongoose = require("mongoose")

const questionSchema = new mongoose({
    text :{ 
     type:   String
    },
    optionId :{
        type: mongoose.Schema.ObjectId,
        ref:"optionSchema",
        required : true
    }

});

const question = mongoose.model("question",questionSchema);
module.exports = question;