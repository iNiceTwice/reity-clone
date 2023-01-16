import mongoose from "mongoose"
const Schema = mongoose.Schema

const propertieSchema = new Schema({
name:{
    type:String,
    required:true
},
location:{
    type:Object,
    required:true
},
info:{
    type:Object,
    required:true
},
description:{
    type:Object,
    required:true
},
img:{
    type:Array,
    required:true
},
tir:{
    type:Number,
    required:true
},
capRate:{
    type:Number,
    required:true
},
tokens:{
    type:Object,
    required:true
},
price:{
    type:String,
    required:true
},
propertieFlow:{
    type:Object,
    required:true
},
documents:{
    type:String,
    required:true
},
boost:{
    type:Number,
    required:true
},
available:{
    type:Boolean,
    required:true
},

})
mongoose.models = {}
module.exports =  mongoose.model("reityproperties", propertieSchema)