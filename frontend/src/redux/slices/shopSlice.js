import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseAxios } from "../../utils/axios";

export const fetchShops = createAsyncThunk(
    "shops/fetchShops",
    async (name = null, { rejectWithValue }) => {
        try {
            const response = await baseAxios.get("/shops/getAllShops");
            const shops = response.data.map((shop) => {
                const { _id, ...shopData } = shop;
                return { ...shopData, shopId: shop._id };
            });

            let selectedShop = localStorage.getItem("selectedShop");
            if ((!selectedShop && shops.length > 0) || selectedShop === "undefined") {
                selectedShop = shops[0].name || "McDonald's";
                localStorage.setItem("selectedShop", selectedShop);
            }

            return { shops, selectedShop };
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

const shopSlice = createSlice({
    name: "shops",
    initialState: {
        shops: [],
        selectedShop: "",
        loading: false,
        error: null,
    },
    reducers: {
        changeShop: (state, action) => {
            state.selectedShop = action.payload;
            localStorage.setItem("selectedShop", action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShops.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchShops.fulfilled, (state, action) => {
                state.loading = false;
                state.shops = action.payload.shops;
            })
            .addCase(fetchShops.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { changeShop } = shopSlice.actions;

export default shopSlice.reducer;
