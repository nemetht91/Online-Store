import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItems from './trendingItems';

function SearchBar(){
    const [trendingItems, setTrendingItems] = useState([]);
    const [isActive, setIsActive] = useState(false);

    function handleOnFocus(){
        setIsActive(true);
    }

    function handleOnBlur(){
        setIsActive(false);
    }

    return (
        <form action="/search" method="POST">
            <div className="form-group fg--search">
                <div>
                    <input onFocus={handleOnFocus} onBlur={handleOnBlur} type="text" className="input" placeholder="Search a product e.g. milk" name="movieTitle"/>
                    <button className={isActive? "button-active" : ""} type="submit"><i className="fa fa-search"></i></button>
                </div>
                {isActive && <TrendingItems/>}
            </div>
            

        </form>  
    )
}

export default SearchBar;