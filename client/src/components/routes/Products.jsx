import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Product from "../body/product/product";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";


function Products(){
    const products = useContext(ProductsContext);
    const [category, setCategory] = useState("");
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProducts = async () => {
            var data = undefined;
            if(location.state.name == "Deals"){
                data = await dataFetcher.getDeals();
            }else{
                data = await dataFetcher.getProducts(location.state.id);
            }
            products.updateProducts(data, {name: location.state.name, id: location.state.id});
        }

        if(location.state == undefined){
            navigate('/pagenotfound');
        }
        else{
            setCategory(location.state.name);
            fetchProducts();
        }
        
    }, [location]);

    return <div className="products-page page">
        <h1>{category}</h1>
        <div className="products">
            {products.items.map((product) => {
                return <Product key={product.id} detail={product} category={category}/>
            })}
        </div>
    </div>
}

export default Products;