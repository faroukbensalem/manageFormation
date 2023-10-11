const mongoose = require("mongoose")

const formateurSchema = new mongoose({
    nom:{
        type:String,
    },
    prenom:{
        type:String,
    },
});

const formateur = mongoose.model("formateur", formateurSchema);
module.exports = formateur;