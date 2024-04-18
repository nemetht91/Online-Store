import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItem from './trendingItem';

function TrendingItems(){
  
    const [trendingItems, setTrendingItems] = useState([]);
    const serverUrl = import.meta.env.VITE_API_SERVER_URL;

    useEffect(() => {
        const fetchTrendingItems = async () => {
            const response = await fetch(serverUrl+"api/trending");

            const data = await response.json();

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