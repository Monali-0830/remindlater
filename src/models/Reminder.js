const mongoose = require('mongoose');

const reminderschema = new mongoose.Schema({
        date:{type:String,required:true},
        time:{type:String,required:true},
        message:{type:String,required:true},
        messageType:{
            type:String,
            enum:['sms','email'],
            required:true
        },
        createdAt:{type:Date,default:Date.now},
        completed: { type: Boolean, default: false } 
    })

module.exports = mongoose.model('Reminder' , reminderschema) ;