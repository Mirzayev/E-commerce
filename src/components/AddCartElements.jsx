import TodaysProduct from "./TodaysProduct.jsx";
import { useState } from "react";
import BasketProduct from "../pages/BasketProduct.jsx";

export default function AddCartElements() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    return (
        <div>
            {/*<TodaysProduct onAddCart={handleAddToCart} />*/}
            <BasketProduct items={cartItems} />
        </div>
    );
}
