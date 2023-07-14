import { configureStore, combineReducers } from "@reduxjs/toolkit";
import shopsReducer from "./slices/shopSlice";
import productsReducer from "./slices/productSlice";
import orderSlice from "./slices/orderSlice";

const rootReducer = combineReducers({
    shopsData: shopsReducer,
    productsData: productsReducer,
    cartData: orderSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
