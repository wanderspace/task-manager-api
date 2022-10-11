// CRUD create read update delete

const { ObjectID } = require('bson')
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error,client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }

    const db =client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age:20
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        _id:new ObjectID("628c736ba2bce4cf790997e0")
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})