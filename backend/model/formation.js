const mongoose = require("mongoose")

const formationSchema = new mongoose.Schema({
    titre:{
        type:String,
    },
    dateDebut:{
        type:date,
    },
    dateFin:{
        type:date,
    },
    image:{
        type:String,
    },
    fichierDuCour:{
       data : Buffer,
       contentType : String ,
       required: true
    },
    QuizId :[{
        type :mongoose.Schema.Types.ObjectId,
        ref:"quizSchema",
        required : true
    }]
});

const formation = mongoose.model("formation",formationSchema);
module.exports = formation;