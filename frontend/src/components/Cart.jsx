import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
    const { cartItems } = useSelector((state) => state.cartData);

    return (
        <section className="cart-items-wrapper">
            <h3 className="mb-3 mt-3 text-center">Your Purchases:</h3>
            <div id="cart-items-list">
                {cartItems.map((product, index) => {
                    return <CartItem key={index} productData={product} />;
                })}
            </div>
        </section>
    );
}
