import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    name: String,
});

export const Shops = mongoose.model("Shop", shopSchema);
