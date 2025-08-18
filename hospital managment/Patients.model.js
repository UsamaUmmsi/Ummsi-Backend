import mongoose from "mongoose"
import { Hospital } from "./hospital.model";

const patientsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    diagonsedWith: {
        type: String,
        required : true,
    },
    address: {
        type: String,
        required : true,
    },
    age: {
        type: Number,
        required : true,
    },
    bloodGroup: {
        type: String,
        required : true,
    },
    gender: {
        type: String,
        enum:["M","F","O"],
        required :true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref : Hospital
    },
    


},{timestumps: true})

export const Patients = mongoose.model("Patients", patientsSchema);