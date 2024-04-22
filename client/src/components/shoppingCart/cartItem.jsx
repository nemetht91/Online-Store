import React, {useState, useEffect} from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import Quantity from "../body/product/quantity";
import Price from "../body/product/price";


function CartItem(props){

    const cart = useContext(CartContext);

    function decrease(){
        cart.removeOneToCart(props.item.id);
    }

    function increase(){
        cart.addOneToCart({item: props.item, quantity: 1});
    }

    function remove(){
        cart.deleteFromCart(props.item.id);
    }

    return <div className="cartItem">
        <img src={props.item.img} alt={props.item.name} />
        <div className="text">
            <p>{props.item.name}</p>
            <Price detail={props.item}/>
            <Quantity decrease={decrease} increase={increase} quantity={props.quantity}/>
        </div>
        <p className="remove" onClick={remove}>x</p>
    </div>

}

export default CartItem;