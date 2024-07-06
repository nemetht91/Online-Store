import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Product from "../body/product/product";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { useParams } from "react-router-dom";


function SearchPage(){
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()

    const [products, setProducts] = useState([])
    const [searchedText, setSearchedText] = useState("");
    const [categoryFilters, setCategoryFilters] = useState({});

    useEffect(() => {
        updateText();
    }, [location.state]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dataFetcher.searchProducts(searchedText);
            setProducts(data);
        }
        console.log(searchedText);
        fetchProducts();
    }, [searchedText])

    function updateText(){
        if(location.state == undefined){
            setSearchedText("");
        }else{
            setSearchedText(location.state.text);
        }
    }

    function addCategoryFilter(filterName, value){

        setCategoryFilters((preVaule) => {
            return {
                ...preVaule,
                [filterName]: value
            }
        })
    }

    return <div className="search-page page">
        <h1>Search Results</h1>
        <div className="search-bar">
            <p>{searchedText}</p>
        </div>
        <div className="content">
            {products.map((product) => {
                return <Product key={product.id} detail={product} />
            })}
        </div>

    </div>


}

export default SearchPage;