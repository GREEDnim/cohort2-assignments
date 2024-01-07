const express=require('express')
const app=express();
const mongoose=require('mongoose')
const CardRouter=require('./routes')

app.use(express.json());
app.use('/',CardRouter);

//connecting to db and running app.
app.listen(3000,()=>{
    mongoose.connect('mongodb+srv://greednim69:greednim69@cluster0.c3kbzov.mongodb.net/week5')
    .then(()=>{
        console.log("CONNECTED TO DB AND RUNNING AT PORT 3000")
    })
    .catch((e)=>console.log(e.message));
})