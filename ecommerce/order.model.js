import mongoose from "mongoose"


const orderItemsSchema = new mongoose.schema({
    productId:{
        type: mongoose.schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type: Number,
        required : true,
    },
})
const orderSchema = mongoose.Schema({
    order:{
        type: Number,
        required : true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING",
    }

},{timestamps: ture});

export const Order = mongoose.model("Order", orderSchema);