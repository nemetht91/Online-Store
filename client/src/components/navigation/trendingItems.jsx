import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItem from './trendingItem';
import dataFetcher from '../../../dataFetch';

function TrendingItems(props){
  
    const [trendingItems, setTrendingItems] = useState([]);

    useEffect(() => {
        const fetchTrendingItems = async () => {
            const data = await dataFetcher.getTrendingItems();

            setTrendingItems(data);
        }
        //fetchTrendingItems();
        setTrendingItems(props.items)
    }, []);



    return <div className='trending-items'>
        <h2>Trending Products</h2>
        <div>
            {props.items?.map((data) => {
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