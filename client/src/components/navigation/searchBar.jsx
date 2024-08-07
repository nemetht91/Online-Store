import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItems from './trendingItems';
import dataFetcher from '../../../dataFetch';
import { useNavigate } from 'react-router-dom';

function SearchBar(){
    const [trendingItems, setTrendingItems] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [products, setProducts] = useState();
    const [text, setText] = useState("");
    const navigate = useNavigate();


    function handleOnFocus(event){
        if(!isActive){
            handleChange(event);
        }
        setIsActive(true);
    }

    function handleOnBlur(){
        setIsActive(false);
    }

    const fetchTrendingItems = async () => {
        const data = await dataFetcher.getTrendingItems();
        setProducts(data);
        setTrendingItems(true);
    }



    function handleChange(event){
        const searchProducts = async () => {
            const data = await dataFetcher.searchProducts(event.target.value);
            const filteredData = data.filter((element, index) => index < 5);
            setProducts(filteredData);
            setTrendingItems(false);
        }

        if(event.target.value === ""){
            setText("");
            fetchTrendingItems();
            return;
        }
        setText(event.target.value);
        searchProducts();
    }

    function submit(event){
        event.preventDefault();
        navigate(`/search`,{state:{text:text}});
    }

    return (
        <form onSubmit={submit}>
            <div  className="form-group fg--search">
                <div>
                    <input onBlur={handleOnBlur} onFocus={handleOnFocus}  onChange={handleChange} type="text" className="input" placeholder="Search a product e.g. milk" name="search" value={text}/>
                    <button onClick={submit} className={isActive? "button-active" : ""} type="submit"><i className="fa fa-search"></i></button>
                </div>
                {isActive && <TrendingItems title={trendingItems?"Trending Products":"Products"} items={products} />}
            </div>
            

        </form>  
    )
}

export default SearchBar;