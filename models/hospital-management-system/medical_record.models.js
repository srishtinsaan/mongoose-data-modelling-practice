import mongoose from 'mongoose'

const medical_recordSchema = new mongoose.Schema(
    {},
    {timestamps : true}
)

export const Medical_record = new mongoose.model("Medical_record", medical_recordSchema)