const {getAllCards,addCard}=require('./controllers')

const express=require('express')
const router=express.Router();

router.get('/',getAllCards);
router.post('/add',addCard);

// router.delete('/delete/:id',deleteCard);
// router.put('/update/:id',updateCard);

module.exports=router;