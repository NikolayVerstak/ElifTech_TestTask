import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import Cart from "../components/Cart";
import "../styles/CartPage.scss";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import ModalContext from "../context/ModalContext";
import ModalWindow from "../components/Modal";
import Error from "../components/Error";

export default function ShoppingCartPage() {
    const { cartItems, loading, error } = useSelector((state) => state.cartData);
    const { showModal } = useContext(ModalContext);
    const isEmptyCart = cartItems.length === 0;

    if (loading) return <Loading />;

    if (error) return <Error />;

    return (
        <main className={`cart-page ${isEmptyCart ? "empty" : "filled"}`}>
            {/* Show modal window about order complete */}
            <ModalWindow />

            {isEmptyCart ? (
                !showModal && (
                    <div className="empty-cart-section">
                        <h2>Your Cart is Empty</h2>
                        <p>
                            You haven't added any products to your cart yet. Start shopping now and
                            discover our amazing products!
                        </p>
                        <Link to="/shops" className="btn btn-light">
                            Return to Shops
                        </Link>
                    </div>
                )
            ) : (
                <>
                    <UserForm />
                    <Cart />
                </>
            )}
        </main>
    );
}
