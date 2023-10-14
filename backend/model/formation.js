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
    }
});

const formation = mongoose.model("formation",formationSchema);
module.exports = formation;