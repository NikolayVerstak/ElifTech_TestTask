// dependencies
import { Router } from "express";
import { Shops } from "../models/shop.js";
import { responseMiddleware } from "../middlewares/errorHandlerMiddleware.js";

const router = new Router();

router.get("/getAllShops", async (req, res, next) => {
    try {
        const shops = await Shops.find({}, { __v: 0 });
        next(shops);
    } catch (error) {
        next(error);
    }
});

router.use(responseMiddleware);

export { router };
