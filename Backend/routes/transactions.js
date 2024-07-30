const router = require('express').Router();
const {addIncome, getIncome} = require('./../controllers/income') 
// router.get('/',(req,res)=>{
//     res.send("HERE");
// })

router.post('/addIncome',addIncome);
router.get('/getIncome',getIncome)
module.exports = router;