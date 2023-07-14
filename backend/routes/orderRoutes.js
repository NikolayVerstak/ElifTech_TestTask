import { Router } from "express";
import { orderService } from "../services/orderService.js";
import { responseMiddleware } from "../middlewares/errorHandlerMiddleware.js";

const router = new Router();

router.post("/new", async (req, res, next) => {
    try {
        const { email, lastOrder } = req.body;

        const order = await orderService.createOrder({
            email,
            lastOrder,
        });

        next(order);
    } catch (error) {
        next(error);
    }
});

router.use(responseMiddleware);

export { router };
