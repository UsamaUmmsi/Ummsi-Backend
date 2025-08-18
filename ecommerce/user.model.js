import mongoose from "mongoose"
const userSchema = new mongoose.schema({
    contant:{
        type: String,
        required: true,
        unique : true,
        lowercase : true,
    },
    email:{
        type: String,
        required: true,
        unique : true,
        lowercase : true,
    },
    password:{
        type: String,
        required : true,
    },
    
    
},{timestumps: true});


export const User = mongoose.model('User', userSchema);