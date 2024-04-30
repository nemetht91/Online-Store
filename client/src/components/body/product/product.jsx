import React, {useState} from "react";
import Price from "./price";
import "./product.css"
import Quantity from "./quantity";
import { useContext } from "react";
import { CartContext } from "../../../CartContext";
import { useNavigate } from "react-router-dom";


function Product(props){

    const [quantity, setQuantity] = useState(1);
    const cart = useContext(CartContext);
    const navigate = useNavigate();


    function increaseQuantity(){
        setQuantity(quantity + 1);
    }

    function deascreaseQuantity(){
        if(quantity <= 1){
            return
        }
        setQuantity(quantity - 1);
    }

    function handleClick(){
        navigate(`/products/${props.category}/${props.detail.name}`,{state:{id:props.detail.id}});

    }

    return <div className="product">
        <img onClick={handleClick} src={props.detail.img} alt={props.detail.name} />
        <p onClick={handleClick}>{props.detail.name}</p>
        <Price onClick={handleClick} detail={props.detail}/>
        <Quantity quantity={quantity} increase={increaseQuantity} decrease={deascreaseQuantity} />
        <button onClick={() => {
            cart.addOneToCart({item: props.detail, quantity: quantity});
        }} className="cart">Add to Cart</button>
    </div>
}

export default Product