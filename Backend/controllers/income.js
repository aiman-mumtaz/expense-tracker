const IncomeSchema = require('./../models/IncomeModels')


exports.addIncome = async (req,res) => {
    // console.log(req.body);
    const {title, amount, type, date, category, description} = req.body;
    const income = IncomeSchema({
        title, amount, type, date, category, description
    })
    try{
        if(!(title && date && category && description && date)){
            return res.status(400).json({"message" : "One or more required fields missing"});
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({"message" : "Amount must be a positive number"});
        }
        await income.save();
        res.status(200).json({"message":"Income Added"});
    }catch(error){
        res.status(500).json({"message":error});
    }
    // console.log(income);
}

exports.getIncomes = async(req,res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt:-1});
        res.status(200).json(incomes);
    }catch(error){
        res.status(500).json({"message":error});
    }
}

exports.deleteIncome = async(req,res) => {
    const {id} = req.params;
    console.log(id);
    IncomeSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({"message":"Income deleted"});
    }).catch((error)=>{
        res.status(500).json({"message":error});
    });
}