import React, {useState, useEffect} from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import Quantity from "../body/product/quantity";


function CartItem(props){

    const cart = useContext(CartContext);

    function decrease(){
        cart.removeOneToCart(props.id);
    }

    function increase(){
        cart.addOneToCart(props.id);
    }

    function remove(){
        cart.deleteFromCart(props.id);
    }

    return <div className="cartItem">
        <img src={props.item.img} alt={props.item.name} />
        <div className="text">
            <p>{props.item.name}</p>
            <h3>£{props.item.price}</h3>
            <Quantity decrease={decrease} increase={increase} quantity={props.quantity}/>
        </div>
        <p className="remove" onClick={remove}>x</p>
    </div>

}

export default CartItem;