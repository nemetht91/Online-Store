import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'
import TrendingItem from './trendingItem';

function TrendingItems(){
    const testData = [
        {id:1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s", productName: "HandCream", desciption: "I'm a product detail. I'm a great place to add more" },
        {id:2, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s", productName: "HandCream", desciption: "I'm a product detail. I'm a great place to add more" },
        {id:3, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s", productName: "HandCream", desciption: "I'm a product detail. I'm a great place to add more" },
        {id:4, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s", productName: "HandCream", desciption: "I'm a product detail. I'm a great place to add more" }

    ]

    return <div className='trending-items'>
        <h2>Trending Products</h2>
        <div>
            {testData.map((data) => {
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