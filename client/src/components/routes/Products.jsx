import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Product from "../body/product/product";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { useParams } from "react-router-dom";


function Products(){
    const products = useContext(ProductsContext);
    const [category, setCategory] = useState({});
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()


    useEffect(() => {

        const fetchData = async () => {
            var data;
            if(params.category == "Deals"){
                setCategory({name: params.category})
            }
            else{
                var data = await dataFetcher.getCategoryByName(params.category);
                setCategory(data);
            }
            setLoaded(true);
        }
        setLoaded(false);
        fetchData();
        
    }, [location]);

    useEffect(() => {
        const fetchProducts = async () => {
            var data = undefined;
            if(params.category == "Deals"){
                data = await dataFetcher.getDeals();
            }else{
                data = await dataFetcher.getProducts(category.id);
            }
            products.updateProducts(data, {name: category.name, id: category.id});
        }

        if(loaded && (category.name == undefined || category == undefined)){
            navigate("pagenotfound");
        }else{
            fetchProducts();
            window.scrollTo(0, 0);
        }
    }, [loaded, category])


    return <div className="products-page page">
        <h1>{category.name}</h1>
        <div className="products">
            {products.items.map((product) => {
                return <Product key={product.id} detail={product} category={category.name}/>
            })}
        </div>
    </div>
}

export default Products;