const mongoose=require('mongoose');


//mongoose url connection
//const mongoURL='mongodb://127.0.0.1:27017/hotels';


//mongodb connection


mongoose.connect('mongodb://127.0.0.1:27017/hotels').then(() => {
  console.log(`successfully connected`);
}).catch((e) => {
  console.log(`not connected`);
}); 
//default mongodb connection
const db=mongoose.connection;

//eventlistener for db connection
db.on('connected',()=>{
    console.log("connected to mongodb server")
})

//export the db
module.exports=db;