import React from "react";
import Price from "./price";
import "./product.css"

function Product(props){

    return <div className="product">
        <img src={props.detail.img} alt={props.detail.name} />
        <p>{props.detail.name}</p>
        <Price detail={props.detail}/>

    </div>
}

export default Product