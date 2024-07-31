const ExpenseSchema = require('./../models/ExpenseModels')


exports.addExpense = async (req,res) => {
    // console.log(req.body);
    const {title, amount, type, date, category, description} = req.body;
    const expense = ExpenseSchema({
        title, amount, type, date, category, description
    })
    try{
        if(!(title && date && category && description && date)){
            return res.status(400).json({"message" : "One or more required fields missing"});
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({"message" : "Amount must be a positive number"});
        }
        await expense.save();
        res.status(200).json({"message":"Expense Added"});
    }catch(error){
        res.status(500).json({"message":error});
    }
    // console.log(income);
}

exports.getExpenses = async(req,res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt:-1});
        res.status(200).json(expenses);
    }catch(error){
        res.status(500).json({"message":error});
    }
}

exports.deleteExpense = async(req,res) => {
    const {id} = req.params;
    // console.log(id);
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense)=>{
        console.log(expense);
        res.status(200).json({"message":"Expense deleted"});
    }).catch((error)=>{
        res.status(500).json({"message":error});
    });
}