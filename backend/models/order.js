import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: String,
    lastOrder: {
        userName: String,
        phoneNumber: String,
        address: String,
        orderNumber: Number,
        cartItems: [],
        totalAmount: String,
        totalQty: Number,
        date: String,
    },
    orderHistory: [],
    ordersQty: Number,
});

export const Orders = mongoose.model("Order", orderSchema);
