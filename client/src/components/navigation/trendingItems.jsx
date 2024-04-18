import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItem from './trendingItem';

function TrendingItems(){
  
    const [trendingItems, setTrendingItems] = useState([]);

    useEffect(() => {
        const fetchTrendingItems = async () => {
            console.log(process.env.REACT_APP_SERVER_URL);
            const response = await fetch("api/trending");
            console.log(response);

            const data = await response.json();

            setTrendingItems(data);
            console.log(trendingItems);
        }
        fetchTrendingItems();
    })

    return <div className='trending-items'>
        <h2>Trending Products</h2>
        <div>
            {trendingItems.map((data) => {
                return <TrendingItem 
                key={data.id}
                imgUrl={data.imgUrl}
                productName={data.productName}
                desciption={data.desciption}
                />
            })}
        </div>
    </div>
}

export default TrendingItems;