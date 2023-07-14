import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    shopName: String,
    id: String,
    name: String,
    description: String,
    image: String,
    price: String,
});

export const Products = mongoose.model("Product", productSchema);
