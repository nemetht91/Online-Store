import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import { useNavigate } from "react-router-dom";
import dataFetcher from '../../../dataFetch';

function TrendingItem(props){

    const navigate = useNavigate();

    function handleClick(product){
        const redirect = async () => {
            const category = await dataFetcher.getCategoryById(product.categoryId);
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