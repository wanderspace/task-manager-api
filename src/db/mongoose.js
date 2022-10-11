const mongoose =require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true
})



// const Read = new Task({
//     description:'Read   fudo   '
// })

// Read.save().then(()=>{
//     console.log(Read)
// }).catch((error)=>{
//     console.log('Error !',error)
// })