const express=require('express');
const app=express();
const db=require('./db');
const Person=require('./models/person');
const menuItem=require('./models/menuItem');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('welcome to my hotel')
})

const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menuItem',menuItemRoutes);


//import person routes

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
/*
    newPerson.save((error,savedPerson)=>{
        if(error){
            console.log("eroor in saving person",error);
            res.status(500).json({error:"error from server"})
        }
        else{
            console.log("successfully done");
            res.status(200).json(savedPerson);
        }
    })
    */

/*
app.get('/chicken',(req,res)=>{
    res.send('chicken would be served')
})
app.get('/idli',(req,res)=>{
    var customized_idli={
        name:'rava idli',
        chutney:false,
        is_sambar:true,
        size:'10 cm diameter'
    }
    res.send(customized_idli);
})
app.post('/items',(req,res)=>{
    console.log("items are send");
})
*/

app.listen(3000,()=>{
    console.log("listening on port 3000")
});