import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";

export default function ProductsList() {
    const { products } = useSelector((state) => state.productsData);
    const { selectedShop } = useSelector((state) => state.shopsData);

    return (
        <section className="products-list-wrapper">
            <h3 className="mb-3 mt-3 text-center">List of {selectedShop} products</h3>
            <Row id="products-list">
                {products.map((product, index) => {
                    return (
                        <Col key={index}>
                            <ProductCard productData={product} />
                        </Col>
                    );
                })}
            </Row>
        </section>
    );
}
