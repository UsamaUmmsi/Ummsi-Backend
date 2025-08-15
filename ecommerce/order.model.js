import mongoose from "mongoose"


const orderItemsSchema = new mongoose.schema()
const orderSchema = mongoose.Schema({
    order:{
        type: Number,
        required : true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    orderItems:{
        type: mongoose.Schema.Types.ObjectId,
    },

},{timestamps: ture})

export const Order = mongoose.model("Order",orderSchema)