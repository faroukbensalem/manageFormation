const question = require("../model/question");
const quiz = require("../model/quiz")

const addQuestion = async (req,res)=>{
    try{
        const {titre } = req.body  ; 
        const newQuestion = new question({
            titre ,
        })
        const savedQuestion = await newQuestion.save();


    }catch(err){
        res.status(500).json({ message: "Erreur du serveur", error: err.message });
    }
};


module.exports = {
    addQuestion,
}