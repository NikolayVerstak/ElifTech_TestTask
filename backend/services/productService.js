import { sendErrorResponse } from "../middlewares/errorHandlerMiddleware.js";
import { Products } from "../models/product.js";
import { Shops } from "../models/shop.js";

class ProductService {
    async getAllProducts(shopName) {
        try {
            const shop = await Shops.findOne({ name: shopName });

            if (!shop) {
                return sendErrorResponse(`${shopName} shop isn't found`);
            }

            const products = await Products.find({ shopName }, { __v: 0 });
            return products;
        } catch (error) {
            return sendErrorResponse(error.message);
        }
    }
}
const productService = new ProductService();

export { productService };
