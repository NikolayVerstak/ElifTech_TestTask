import { router as orderRoutes } from "./orderRoutes.js";
import { router as shopRoutes } from "./shopRoutes.js";
import { router as productRoutes } from "./productRoutes.js";

const initRoutes = (app) => {
    app.use("/api/shops", shopRoutes);
    app.use("/api/products", productRoutes);
    app.use("/api/orders", orderRoutes);
};

export { initRoutes };
