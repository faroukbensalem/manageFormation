const mongoose = require("mongoose")

const formateurSchema = new mongoose.Schema({
    nom:{
        type:String,
    },
    prenom:{
        type:String,
    },
    formationId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"formationSchema",
        required:true
    }
});

const formateur = mongoose.model("formateur", formateurSchema);
module.exports = formateur;