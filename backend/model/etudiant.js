const mongoose = require("mongoose");

const etudiantSchema = new mongoose.Schema({
    nom:{
        type:String,
    },
    prenom:{
        type:String,
    },
});

const etudiant = mongoose.model("etudiant",etudiantSchema);
module.exports = etudiant;