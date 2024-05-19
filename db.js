const mongoose=require('mongoose');
require('dotenv').config();


//mongoose url connection
//const mongoURL='mongodb://127.0.0.1:27017/hotels';



const mongoDbUrl=process.env.DB_URL;


mongoose.connect(mongoDbUrl).then(() => {
  console.log(`successfully connected`);
}).catch((e) => {
  console.log(`not connected`);
}); 


//default mongodb connection
const db=mongoose.connection;
mongoose.set('bufferCommands', false);

//eventlistener for db connection
db.on('connected',()=>{
    console.log("connected to mongodb server")
})

//export the db
module.exports=db;