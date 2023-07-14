import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseAxios } from "../../utils/axios";

export const createOrder = createAsyncThunk(
    "cart/createOrder",
    async (formData, { rejectWithValue }) => {
        try {
            const orderDataWithDate = {
                ...formData,
                lastOrder: {
                    ...formData.lastOrder,
                    date: new Date().toISOString(),
                },
            };
            const response = await baseAxios.post(`/orders/new`, orderDataWithDate);
            return response.data;
        } catch (error) {
            if (error.response) {
                // Error with response from the server
                const errorMessage = error.response.data.message;
                return rejectWithValue(errorMessage);
            } else {
                // Other types of errors (network, etc.)
                return rejectWithValue(error.message);
            }
        }
    }
);

const updateLocalStorage = (cartItems, totalAmount, totalQty) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalAmount", totalAmount);
    localStorage.setItem("totalQty", totalQty);
};

const orderSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalAmount: "0 ₴",
        totalQty: 0,
        lastOrder: {},
        loading: false,
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProductIndex = state.cartItems.findIndex(
                (item) => item.productId === product.productId
            );

            if (existingProductIndex !== -1) {
                state.cartItems[existingProductIndex].qty += 1;
            } else {
                const cartProduct = {
                    productId: product.productId,
                    name: product.name,
                    price: product.price,
                    shopName: product.shopName,
                    image: product.image,
                    qty: 1,
                };
                state.cartItems.push(cartProduct);
            }

            state.totalAmount =
                (parseFloat(state.totalAmount) + parseFloat(product.price)).toFixed(2) + " ₴";
            state.totalQty += 1;

            updateLocalStorage(state.cartItems, state.totalAmount, state.totalQty);
        },
        increaseQty: (state, action) => {
            const productId = action.payload;
            const product = state.cartItems.find((item) => item.productId === productId);
            if (product) {
                product.qty += 1;
                state.totalAmount =
                    (parseFloat(state.totalAmount) + parseFloat(product.price)).toFixed(2) + " ₴";
                state.totalQty += 1;
                updateLocalStorage(state.cartItems, state.totalAmount, state.totalQty);
            }
        },
        reduceQty: (state, action) => {
            const productId = action.payload;
            const product = state.cartItems.find((item) => item.productId === productId);
            if (product && product.qty > 1) {
                product.qty -= 1;
                state.totalAmount =
                    (parseFloat(state.totalAmount) - parseFloat(product.price)).toFixed(2) + " ₴";
                state.totalQty -= 1;
            } else if (product && product.qty === 1) {
                state.cartItems = state.cartItems.filter((item) => item.productId !== productId);
                state.totalAmount =
                    (parseFloat(state.totalAmount) - parseFloat(product.price)).toFixed(2) + " ₴";
                state.totalQty -= 1;
            }
            updateLocalStorage(state.cartItems, state.totalAmount, state.totalQty);
        },
        updateCartFromLocalStorage: (state, action) => {
            const { cartItems, totalAmount, totalQty } = action.payload;

            state.cartItems = cartItems;
            state.totalAmount = totalAmount;
            state.totalQty = totalQty;
        },
        cleanCart: (state) => {
            state.cartItems = [];
            state.totalAmount = "0 ₴";
            state.totalQty = 0;
            updateLocalStorage(state.cartItems, state.totalAmount, state.totalQty);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.cartItems = [];
                state.totalAmount = "0 ₴";
                state.totalQty = 0;
                state.lastOrder = action.payload;
                updateLocalStorage(state.cartItems, state.totalAmount, state.totalQty);
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { addToCart, increaseQty, reduceQty, updateCartFromLocalStorage, cleanCart } =
    orderSlice.actions;

export default orderSlice.reducer;
