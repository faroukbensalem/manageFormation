const mongoose = require("mongoose");

const etudiantSchema = new mongoose({
    nom:{
        type:String,
    },
    prenom:{
        type:String,
    },
});

const etudiant = mongoose.model("etudiant",etudiantSchema);
module.exports = etudiant;