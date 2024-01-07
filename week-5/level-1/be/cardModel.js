const mongoose=require('mongoose')

const cardSchema=mongoose.Schema({
    name:String,
    description:String,
    socials:[{name:String,link:String}],
    interests:[String],
})

const Card=mongoose.model("Card",cardSchema);

module.exports={
    Card,
};