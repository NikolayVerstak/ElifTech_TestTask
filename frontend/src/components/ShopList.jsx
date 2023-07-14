import React, { useState, useRef, useEffect } from "react";

import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeShop } from "../redux/slices/shopSlice";
import { fetchProducts } from "../redux/slices/productSlice";
import { IoMdArrowDropdown } from "react-icons/io";

export default function ShopList() {
    const { shops, selectedShop } = useSelector((state) => state.shopsData);
    const { cartItems } = useSelector((state) => state.cartData);
    const [showWarning, setShowWarning] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Close dropdown and remove warning when clicking outside the component
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowWarning(false);
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handles the click on a shop item
    const handleShopClick = (shopName) => {
        if (shopName === localStorage.getItem("selectedShop")) {
            setShowWarning(false);
            setIsOpen(false);
            return;
        }
        if (cartItems.length === 0) {
            dispatch(changeShop(shopName));
            dispatch(fetchProducts({ shopName }));
            setShowWarning(false);
            setIsOpen(false);
        } else if (cartItems[0].shopName !== shopName) {
            setShowWarning(true);
        }
    };

    // Handles the click on the button to toggle the shop list dropdown
    const handleButtonClicked = () => {
        setShowWarning(false);
        setIsOpen(!isOpen);
    };

    // Create the shop list items
    const shopItems = shops.map((shop, index) => {
        const { name } = shop;
        const isActive = name === selectedShop;
        return (
            <ListGroup.Item
                key={index}
                onClick={() => handleShopClick(name)}
                className={isActive ? "shop active" : "shop"}
                id={`shop-${name}`}>
                {name}
            </ListGroup.Item>
        );
    });

    // Show the warning message if user added some product from one shop and try switching the shop
    const warningMessage = (
        <p className="warning-message">
            Please complete your order in the current shop before switching.
        </p>
    );

    return (
        <section className="shops-list-wrapper" id="shop-list" ref={wrapperRef}>
            {/* Shop list as a list for big screens */}
            <h3 className="mb-3 mt-3 d-none d-lg-block">Select the shop: </h3>
            <ListGroup className="d-none d-lg-block mb-lg-2">
                {shopItems}
                {showWarning && warningMessage}
            </ListGroup>

            {/* Shop list as a dropdown for small screens */}
            <h3 className="mb-3 mt-3 d-flex d-lg-none">
                Current shop:
                <Button variant="light" onClick={handleButtonClicked} aria-expanded={isOpen}>
                    {selectedShop}
                    <span className={`icon ${isOpen ? "up" : "down"}`}>
                        <IoMdArrowDropdown />
                    </span>
                </Button>
            </h3>

            <div className={`shop-items d-lg-none ${isOpen ? "d-block" : "d-none"}`}>
                <ListGroup>
                    {shopItems}
                    {showWarning && warningMessage}
                </ListGroup>
            </div>
        </section>
    );
}
