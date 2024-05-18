const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

router.post('/',async (req,res)=>{
    try{
    const data=req.body

    const newPerson=new Person(data);

    //newPerson.name=data.name;
    const response=await newPerson.save();
    console.log('data saved');
    res.status(200).json(response); 
    }
    catch(err){
    console.log(err);
    res.status(500).json({error:"server side fault"});
    }
})
router.get('/',async (req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"server side fault"});
    }
})
router.get('/:workType',async(req,res)=>{
    try{
    const data=req.params.workType;
    if(data=='chef'||data=='manager'||data=='waiter'){
        const response=await Person.find({work:data});
        console.log('data fetched');
        res.status(200).json(response);
    }
    else{
        console.log("error in work");
        res.status(404).json({error:"work invalid"});
    }
}
catch(err){
    console.log(err);
    res.status(500).json({error:"server side fault"});
}
})

router.put('/:id',async (req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPerson=req.body;

        const response=await Person.findByIdAndUpdate(personId,updatedPerson,{
            new:true,
            runValidators:true
        })
        if(!response){
            console.log("error");
            res.status(404).json({error:"person not found"});
        }
        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"server side fault"});
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const personId=req.params.id;

        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            console.log("error");
            res.status(404).json({error:"person not found"});
        }
        console.log('data deleted');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"server side fault"});
    }

})

module.exports=router;