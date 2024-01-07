const {Card}=require('./cardModel')

async function getAllCards(req,res){
    try{
        const cards= await Card.find({});
        res.json(cards);

    }catch(e){
        res.json({message:e.message})
    }
}

async function addCard(req,res){
    try{
        const card=new Card(req.body);
        await card.save();
        
        res.json({"message":"added successfully"});
    }catch(e){
        console.log(e);
        res.json({message:e.message})
    }
}

module.exports={
    getAllCards,addCard
}