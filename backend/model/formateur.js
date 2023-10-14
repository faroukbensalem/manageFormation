const mongoose = require("mongoose")

const formateurSchema = new mongoose.Schema({
    nom:{
        type:String,
    },
    prenom:{
        type:String,
    },
});

const formateur = mongoose.model("formateur", formateurSchema);
module.exports = formateur;