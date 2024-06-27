import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import CartItem from "./cartItem";
import RedButton from "../body/Button";
import "./shoppingCart.css"

function ShoppingCartSummary(){
    const cart = useContext(CartContext);

    function getSumPrice(item, quantity){
        let total = (item.price - item.price * item.discount) * quantity
        return Math.round(total*100)/100;
    }

    return (
        <div className="page cartSummary">
            <div className="cart">
                <h2>My Cart</h2>
                <div className="items">
                {cart.items.map((item, index) => {
                    return <div className="detail"> 
                        <CartItem key={index} item={item.item} quantity={item.quantity}/>
                        <p>£{getSumPrice(item.item, item.quantity)}</p>
                        <i onClick={() => cart.deleteFromCart(item.item.id)} className="fa-regular fa-trash-can"></i>
                    </div>
                })}
                </div>
            </div>
            <div className="order">
                <h2>Order summary</h2>
                <div className="flex">
                    <p>Subtotal</p>
                    <p>${cart.getTotalCost()}</p>
                </div>
                <p className="delivery">Estimate Delivery</p>
                <div className="flex">
                    <p>Total</p>
                    <p>${cart.getTotalCost()}</p>
                </div>
                <RedButton text="Checkout"/>
            </div>
        </div>
    )

}

export default ShoppingCartSummary;