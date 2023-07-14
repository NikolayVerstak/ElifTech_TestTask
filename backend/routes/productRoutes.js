import { Router } from "express";
import { responseMiddleware } from "../middlewares/errorHandlerMiddleware.js";
import { productService } from "../services/productService.js";

const router = new Router();

router.get("/:shopName/getAllproducts", async (req, res, next) => {
    try {
        const { shopName } = req.params;
        const products = await productService.getAllProducts(shopName);
        next(products);
    } catch (error) {
        next(error);
    }
});

router.use(responseMiddleware);

export { router };
