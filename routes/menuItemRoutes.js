const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menuItem');

router.post('/',async (req,res)=>{
    try{
    const data=req.body

    const newItem=new menuItem(data);

    //newPerson.name=data.name;
    const response=await newItem.save();
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
        const data=await menuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"server side fault"});
    }
})
router.get('/:tasteType',async (req,res)=>{
    try{
        const data=req.params.tasteType;
        if(data=='sweet'||data=='sour'||data=='spicy'){
            const response=await menuItem.find({taste:data});
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

module.exports=router;