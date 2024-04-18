import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItem from './trendingItem';
import dataFetcher from '../../../dataFetch';

function TrendingItems(){
  
    const [trendingItems, setTrendingItems] = useState([]);

    useEffect(() => {
        const fetchTrendingItems = async () => {
            const data = await dataFetcher.getTrendingItems();

            setTrendingItems(data);
        }
        fetchTrendingItems();
    })

    return <div className='trending-items'>
        <h2>Trending Products</h2>
        <div>
            {trendingItems.map((data) => {
                return <TrendingItem 
                key={data.id}
                imgUrl={data.img}
                productName={data.name}
                desciption={data.description}
                />
            })}
        </div>
    </div>
}

export default TrendingItems;