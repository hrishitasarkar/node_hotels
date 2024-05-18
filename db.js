const mongoose=require('mongoose');
require('dotenv').config();


//mongoose url connection
//const mongoURL='mongodb://127.0.0.1:27017/hotels';
//mongodb+srv://ueehrishitasarkar:<password>@cluster0.zuj3kck.mongodb.net/


const mongoDbUrl=process.env.DB_URL;


mongoose.connect(mongoDbUrl).then(() => {
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