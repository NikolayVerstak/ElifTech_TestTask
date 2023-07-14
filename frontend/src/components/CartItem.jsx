import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increaseQty, reduceQty } from "../redux/slices/orderSlice";
import { formatShopName } from "../utils/formatShopName";

export default function CartItem({ productData }) {
    const { name, price, image, productId, qty, shopName } = productData;
    const dispatch = useDispatch();

    const handleIncreaseQty = () => {
        dispatch(increaseQty(productId));
    };

    const handleReduceQty = () => {
        dispatch(reduceQty(productId));
    };

    const sum = `${(parseFloat(price.slice(0, -2)) * qty).toFixed(2)} ₴`;
    const formattedShopName = formatShopName(shopName); // eg. Domino's Piza -> dominos-pizza

    return (
        <Card id="cart-item" className={formattedShopName}>
            <div className="cart-image-container">
                <Card.Img src={image} alt={name} />
            </div>
            <Card.Body>
                <Card.Title className="card-item-name">{name}</Card.Title>
                <div className="card-text">
                    <span className="cart-item-price">{sum}</span>
                    <div className="cart-item-qty">
                        <Button onClick={handleReduceQty} className="qty-down" variant="light">
                            -
                        </Button>
                        <span className="mx-2 qty">{qty}</span>
                        <Button onClick={handleIncreaseQty} className="qty-up" variant="light">
                            +
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
