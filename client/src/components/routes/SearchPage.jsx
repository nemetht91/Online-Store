import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Product from "../body/product/product";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { useParams } from "react-router-dom";


function SearchPage(){
    const products = useContext(ProductsContext);
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()

    const [searchedText, setSearchedText] = useState("");
    const [categoryFilters, setCategoryFilters] = useState([]);

    useEffect(() => {
        if(location.state == undefined){
            setSearchedText("");
        }else{
            setSearchedText(location.state.text);
        }
    }, [location.state])

    return <div className="search-page page">
        <h1>Search Results</h1>
        <div className="search-bar">
            <p>{searchedText}</p>
        </div>
        <div className="content">

        </div>

    </div>


}

export default SearchPage;