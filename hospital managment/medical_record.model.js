import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({},{timestumps: true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)