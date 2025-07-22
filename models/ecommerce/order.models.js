import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema( //used only by orderItems(a field in order schema)
    {
        productId : {
            type : mongoose.Schema.Types.OrderId,
            ref : "Product",
        },
        quantity : {
            required : true,
            type : Number,
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        orderPrice : {
            type : Number,
            required : true,
        },
        customer : {
            type : mongoose.Schema.Types.OrderId,
            ref : "User",
        },
        orderItems : {
            type : [orderItemSchema] // orderitems k andar multiple cheezein store karni thi that's why
        },
        address : {
            type : String,
            required : true,
        },
        status : {
            type : String,
            enum : ["PENDING", "CANCELLED", "DELIVERED"], // choices de raha h order k status k liye
            default : "PENDING"
        }
    },
    {timestamps : true}
)

export const Order = new mongoose.model("Order", orderSchema)