import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Product from "../body/product/product";
import { useNavigate } from "react-router-dom";


function Products(){
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
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
            setProducts(data);
        }

        if(location.state == undefined){
            navigate('/pagenotfound');
        }
        else{
            setTitle(location.state.name);
            fetchProducts();
        }
        
    }, [location]);

    return <div className="products-page page">
        <h1>{title}</h1>
        <div className="products">
            {products.map((product) => {
                return <Product key={product.id} detail={product}/>
            })}
        </div>
    </div>
}

export default Products;