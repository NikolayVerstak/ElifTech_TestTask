import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

import ShopsPage from "./pages/ShopsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import NavigationBar from "./components/NavigationBar";
import { updateCartFromLocalStorage } from "./redux/slices/orderSlice";
import { ModalProvider } from "./context/ModalContext";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const totalAmount = localStorage.getItem("totalAmount") || "0 ₴";
        const totalQty = parseInt(localStorage.getItem("totalQty")) || 0;

        if (cartItems.length > 0 || totalAmount !== "0 ₴" || totalQty > 0) {
            dispatch(updateCartFromLocalStorage({ cartItems, totalAmount, totalQty }));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <BrowserRouter>
            <ModalProvider>
                <NavigationBar />
                <Routes>
                    <Route path="/shops" element={<ShopsPage />} />
                    <Route path="/cart" element={<ShoppingCartPage />} />
                    <Route path="*" element={<Navigate to="/shops" replace />} />
                </Routes>
            </ModalProvider>
        </BrowserRouter>
    );
}

export default App;
