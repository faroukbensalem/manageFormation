const mongoose = require("mongoose");

const etudiantSchema = new mongoose.Schema({
    nom:{
        type:String,
    },
    prenom:{
        type:String,
    },
    formationId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"formationSchema" ,
       },
});

const etudiant = mongoose.model("etudiant",etudiantSchema);
module.exports = etudiant;