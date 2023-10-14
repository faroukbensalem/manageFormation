const option = require("../model/option")
const question = require("../model/question")

const getOptionByQuestion = async (req, res)=>{
    try{
        const option = await option.findById(req.params.id);
        if(!option){
            return res.status(404).json({message:"question option not found"})
        }
        res.status(200).json(option); 
    }catch(err){
        res.status(500).json({message:"server error"},err)
    }
};

const addOption = async(req,res )=>{
    try{
        const {text , questionId, estCorrect} = req.body ;
        const question = await question.findById(questionId);
        if(!question){
            return res.status(404).json({message : "la question associer est introuvable"})
        }
        const newOption = new Option({
            text , 
            question : question._id , 
            estCorrect
        });
        const savedOption = await newOption.save();

        question.Option.push(savedOption);
        await question.save();
    }catch(err){
        res.status(500).json({message:"server error"},err)
    }
}

const deleteOption = async(req , res)=>{
    try{
        const option = await option.findByIdAndDelete(req.params.optionId);
        if(!option){
            return res.status(404).json({message : "option not found"})
        }
        return res.status(200).json({message : "option deleted successfully"});
    }catch(err){
        onsole.error("Error deleting option:", err);
    res.status(500).json({ message: "Internal server error" });
    }
   
}

module.exports ={
getOptionByQuestion,
addOption,
deleteOption
};



