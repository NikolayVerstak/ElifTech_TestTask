import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { loadProducts } from "./seeds/seeds.js";
import { initRoutes } from "./routes/routes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const DB_STRING = process.env.DB_STRING;

mongoose.set("strictQuery", true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

// test route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Foodify Delivery app..." });
});

async function start() {
    try {
        await mongoose.connect(DB_STRING);
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
        // create data - shops and products of those shops
        loadProducts();
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
}
start();
