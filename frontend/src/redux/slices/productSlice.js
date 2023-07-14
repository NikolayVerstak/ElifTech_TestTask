import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseAxios } from "../../utils/axios";

export const fetchProducts = createAsyncThunk(
    "shops/fetchProducts",
    async ({ shopName }, { rejectWithValue }) => {
        try {
            const response = await baseAxios.get(`products/${shopName}/getAllproducts`);
            const products = response.data.map((product) => {
                const { _id, ...productData } = product;
                return { ...productData, productId: product._id };
            });
            return products;
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

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;
