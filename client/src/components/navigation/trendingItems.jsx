import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItem from './trendingItem';



function TrendingItems(props){


    return <div className='trending-items'>
        <h2>{props.title}</h2>
        <div>
            {props.items?.map((product) => {
                return <TrendingItem
                product={product}
                key={product.id}
                />
            })}
        </div>
    </div>
}

export default TrendingItems;