import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
    {},
    {timestamps : true}
)

export const Category = new mongoose.model("Category", categorySchema)