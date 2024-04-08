import { useEffect, useState } from 'react';
import React from "react";
import './navbar.css'

function TrendingItem(props){
    return <div className='trending-item'>
        <img src={props.imgUrl} alt={props.productName} />
        <div>
            <h2>{props.productName}</h2>
            <p>{props.desciption}</p>
        </div>
    </div>
}

export default TrendingItem;