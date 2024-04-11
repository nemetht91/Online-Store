import React, {useState} from "react";
import Price from "./price";
import "./product.css"
import Quantity from "./quantity";

function Product(props){

    const [quantity, setQuantity] = useState(0);

    function increaseQuantity(){
        setQuantity(quantity + 1);
    }

    function deascreaseQuantity(){
        if(quantity <= 1){
            return
        }
        setQuantity(quantity - 1);
    }

    return <div className="product">
        <img src={props.detail.img} alt={props.detail.name} />
        <p>{props.detail.name}</p>
        <Price detail={props.detail}/>
        <Quantity quantity={quantity} increase={increaseQuantity} decrease={deascreaseQuantity} />
        <button onClick={() => {
            props.addCart(props.detail, quantity);
        }} className="cart">Add to Cart</button>
    </div>
}

export default Product