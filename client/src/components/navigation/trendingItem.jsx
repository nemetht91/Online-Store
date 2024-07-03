import { useEffect, useState, useContext } from 'react';
import React from "react";
import './navbar.css'
import { useNavigate } from "react-router-dom";
import dataFetcher from '../../../dataFetch';
import { ProductsContext } from "../../ProductsContext";


function TrendingItem(props){

    const navigate = useNavigate();
    const products = useContext(ProductsContext);


    function handleClick(product){
        const redirect = async () => {
            const category = await dataFetcher.getCategoryById(product.categoryId);
            const items = await dataFetcher.getProducts(category.id);
            products.updateProducts(items, {name: category.name, id: category.id});
            navigate(`/products/${category.name}/${product.name}`,{state:{id:product.id}});
        }
        redirect();

    }


    return <div onMouseDown={() => {handleClick(props.product)}} className='trending-item'>
        <img src={props.product.img} alt={props.product.name} />
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.desciption}</p>
        </div>
    </div>
}

export default TrendingItem;