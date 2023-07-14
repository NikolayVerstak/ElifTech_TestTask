import React from "react";
import { Nav, Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../styles/NavigationBar.scss";
import { Link, useLocation } from "react-router-dom";
import { cleanCart } from "../redux/slices/orderSlice";
import { TbShoppingCartX } from "react-icons/tb";

export default function NavigationBar() {
    const { cartItems } = useSelector((state) => state.cartData);

    const location = useLocation();
    const { pathname } = location;
    const dispatch = useDispatch();
    const getCartItemsQty = () => {
        return cartItems.reduce((total, product) => total + product.qty, 0);
    };

    const handleCleanCart = () => {
        dispatch(cleanCart());
        localStorage.removeItem("fieldValues");
    };

    return (
        <Nav className="h5 text-center px-md-5 px-2 pt-2" variant="tabs">
            <Link
                to="/shops"
                className={`nav-link p-2 px-3 ${pathname === "/shops" ? "active" : " "}`}>
                Shops
            </Link>
            <Link
                to="/cart"
                className={`nav-link p-2 px-3 ${pathname === "/cart" ? "active" : " "}`}>
                <span className="d-none d-sm-block">Shopping Cart</span>
                <span className="d-inline d-sm-none">Cart</span>
                {cartItems.length > 0 && (
                    <Badge variant="light" className="bg-white text-dark">
                        {getCartItemsQty()}
                    </Badge>
                )}
            </Link>
            {cartItems.length > 0 && (
                <Button variant="default" className="clean-cart" onClick={() => handleCleanCart()}>
                    Clean Cart <TbShoppingCartX />
                </Button>
            )}
        </Nav>
    );
}
