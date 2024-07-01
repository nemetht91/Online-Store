import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItems from './trendingItems';
import dataFetcher from '../../../dataFetch';

function SearchBar(){
    const [trendingItems, setTrendingItems] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [products, setProducts] = useState();

    function handleOnFocus(){
        setIsActive(true);
    }

    function handleOnBlur(){
        setIsActive(false);
    }

    function handleChange(event){
        const searchProducts = async () => {
            const data = await dataFetcher.searchProducts(event.target.value);
            const filteredData = data.filter((element, index) => index < 5);
            setProducts(filteredData);
        }
        if(event.target.value === ""){
            setProducts([]);
            return;
        }
        searchProducts();
    }

    return (
        <form action="/search" method="POST">
            <div className="form-group fg--search">
                <div>
                    <input onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleChange} type="text" className="input" placeholder="Search a product e.g. milk" name="movieTitle"/>
                    <button className={isActive? "button-active" : ""} type="submit"><i className="fa fa-search"></i></button>
                </div>
                {isActive && <TrendingItems items={products}/>}
            </div>
            

        </form>  
    )
}

export default SearchBar;