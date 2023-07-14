import React from "react";
import ShopList from "../components/ShopList";
import ProductsList from "../components/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeShop, fetchShops } from "../redux/slices/shopSlice";
import { fetchProducts } from "../redux/slices/productSlice";
import "../styles/ShopsPage.scss";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function ShopsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShops()).then((action) => {
            const { selectedShop } = action.payload;
            dispatch(changeShop(selectedShop));
            dispatch(fetchProducts({ shopName: selectedShop }));
        });
        // eslint-disable-next-line
    }, []);

    const { loading: productsLoading, error: productsError } = useSelector(
        (state) => state.productsData
    );
    const { loading: shopsLoading, error: shopsError } = useSelector((state) => state.shopsData);

    if (productsLoading || shopsLoading) return <Loading />;
    if (productsError || shopsError) return <Error />;

    return (
        <main className="shops-page">
            <ShopList />
            <ProductsList />
        </main>
    );
}
