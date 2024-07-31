const router = require('express').Router();
const {addIncome, getIncomes, deleteIncome} = require('./../controllers/income') 
// router.get('/',(req,res)=>{
//     res.send("HERE");
// })

router.post('/add-income',addIncome)
    .get('/get-incomes',getIncomes)
    .delete('/delete-income/:id',deleteIncome)

module.exports = router;