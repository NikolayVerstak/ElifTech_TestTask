import { sendErrorResponse } from "../middlewares/errorHandlerMiddleware.js";
import { Orders } from "../models/order.js";

class OrderService {
    //  create a sequence of order numbers
    async generateOrderNumber() {
        try {
            const allUsers = await Orders.find();
            // start point of numbers
            let startOrderNumber = 54321;

            if (allUsers) {
                startOrderNumber = allUsers.reduce(
                    (total, user) => total + user.ordersQty,
                    startOrderNumber
                );
            }

            return startOrderNumber;
        } catch (error) {
            return sendErrorResponse(error.message);
        }
    }

    async createOrder({ email, lastOrder }) {
        try {
            const orderNumber = await this.generateOrderNumber();

            lastOrder.orderNumber = orderNumber;

            const isUserExist = await Orders.findOne({ email });

            if (isUserExist) {
                isUserExist.lastOrder = lastOrder;
                isUserExist.orderHistory.push(lastOrder);
                isUserExist.ordersQty += 1;

                await isUserExist.save();
                return { ...lastOrder, email };
            } else {
                const newUser = new Orders({
                    email,
                    lastOrder,
                    orderHistory: [lastOrder],
                    ordersQty: 1,
                });

                await newUser.save();
                return { ...lastOrder, email };
            }
        } catch (error) {
            return sendErrorResponse(error.message);
        }
    }
}

const orderService = new OrderService();

export { orderService };
