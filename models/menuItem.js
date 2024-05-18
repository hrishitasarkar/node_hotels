const mongoose=require('mongoose');

var menuSchema=new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    ingredients:{
        type:[String],
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('menuItems',menuSchema);