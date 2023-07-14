import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Collapse } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import { addToCart } from "../redux/slices/orderSlice";
import { formatShopName } from "../utils/formatShopName";

export default function ProductCard({ productData }) {
    const { name, description, price, image, shopName, productId } = productData;
    const [showDetails, setshowDetails] = useState(false);
    const { cartItems } = useSelector((state) => state.cartData);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(productData));
    };

    const formattedShopName = formatShopName(shopName); // eg. Domino's Piza -> dominos-pizza

    // Check if the product is already added to the cart
    const isAdded = cartItems.find((product) => product.productId === productId);
    // if yes, create overlay block in front of product's image and display it's added quantity
    const qty = isAdded && isAdded.qty;
    const unit = qty === 1 ? "pc." : "pcs.";
    const className = `${formattedShopName} ${isAdded ? "added" : ""}`.trim();

    return (
        <Card id="product-card" className={className}>
            <div className="product-image-container">
                <p className="overlay-container">
                    Added {qty} {unit}
                </p>
                <Card.Img variant="top" src={image} alt={name} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className={`card-text ${showDetails ? " visible" : "hidden"}`}>
                    <Button
                        onClick={() => setshowDetails(!showDetails)}
                        aria-controls="example-collapse-text"
                        variant="default"
                        className={`product-details ${showDetails ? "visible" : "hidden"}`}
                        aria-expanded={showDetails}>
                        {showDetails ? "Hide details" : "Show details"}
                        <span className={`icon ${showDetails ? "up" : "down"}`}>
                            <IoMdArrowDropdown />
                        </span>
                    </Button>
                    <Collapse in={showDetails}>
                        <div id="example-collapse-text">{description}</div>
                    </Collapse>
                </div>
                <div className="price-add-to-cart">
                    <span className="price">{price}</span>
                    <Button variant="default" onClick={() => handleAddToCart()}>
                        {!isAdded ? (
                            <span>Add to Cart</span>
                        ) : (
                            <span style={{ fontSize: "1.2rem" }}>+1</span>
                        )}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
