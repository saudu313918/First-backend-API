const mongoose = require('mongoose')

 const alienSchema = new mongoose.Schema({

    productName :{
        type : String,
        required : true
    },
    productDescription  : {
        type : String,
        required : true
    },
    productRate  : {
        type:Number,
        required:true
    },
    productQuantity   : {
        type:Number,
        required:true
    }
 })

 module.exports = mongoose.model('Alien', alienSchema) 