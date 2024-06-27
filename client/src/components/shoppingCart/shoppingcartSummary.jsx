import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import CartItem from "./cartItem";
import RedButton from "../body/Button";
import "./shoppingCart.css"

function ShoppingCartSummary(){
    const cart = useContext(CartContext);

    

    return (
        <div className="page cartSummary">
            <div className="cart">
                <h2>My Cart</h2>
                <div className="items">
                {cart.items.map((item, index) => {
                    return <div> 
                        <CartItem key={index} item={item.item} quantity={item.quantity}/>
                        <p>${(item.item.price - item.item.price * item.item.discount) * item.quantity}</p>
                    </div>
                })}
                </div>
            </div>
            <div className="order">
                <h2>Order summary</h2>
                <div>
                    <p>Subtotal</p>
                    <p>${cart.getTotalCost()}</p>
                </div>
                <p>Estimate Deliver</p>
                <div>
                    <p>Total</p>
                    <p>${cart.getTotalCost()}</p>
                </div>
                <RedButton text="Checkout"/>
            </div>
        </div>
    )

}

export default ShoppingCartSummary;