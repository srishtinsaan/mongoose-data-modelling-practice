import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema(
    {},
    {timestamps : true}
)

export const Hospital = new mongoose.model("Hospital", hospitalSchema)