import mongoose from 'mongoose'

const subtodoSchema = new mongoose.Schema(
  {
    title : {
      type : String,
      required : true,
    },
    complete : {
      type : Boolean,
      default : false,
    },
    createdBy : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    }
  },
  {timestamps : true}
)

export const Subtodo = new mongoose.model("Subtodo", subtodoSchema)