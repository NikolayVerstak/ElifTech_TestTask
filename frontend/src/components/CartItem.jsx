import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increaseQty, reduceQty, removeItem } from "../redux/slices/orderSlice";
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

    const handleRemoveItem = () => {
        dispatch(removeItem({ productId, price, qty }));
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
                <div onClick={handleRemoveItem} className="cart-item-remove">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
            </Card.Body>
        </Card>
    );
}
