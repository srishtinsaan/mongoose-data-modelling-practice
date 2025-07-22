import mongoose from 'mongoose'

const todoSchema = mongoose.Schema(
  {
    content : {
      type : String,
      required : true,
      
    },
    complete : {
      type : Boolean,
      default : false,
    },
    createdBy : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    },
    subTodos : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subtodo"
      }
    ] // Array of Sub-todos
  },
  {timestamps : true}
)

export const Todo = new mongoose.model("Todo", todoSchema)