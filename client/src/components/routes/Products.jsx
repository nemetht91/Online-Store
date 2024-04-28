import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Product from "../body/product/product";

function Products(){
    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dataFetcher.getProducts(location.state.id);
            setProducts(data);
            console.log(products);
        }

        fetchProducts();
    }, [location.state.name]);

    return <div className="products-page">
        <h1>{location.state.name}</h1>
        <div className="products">
            {products.map((product) => {
                return <Product detail={product}/>
            })}
        </div>
    </div>
}

export default Products;