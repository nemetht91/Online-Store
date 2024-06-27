import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import CartItem from "./cartItem";
import RedButton from "../body/Button";
import "./shoppingCart.css"
import { useNavigate } from "react-router-dom";

function ShoppingCartViewer(){
    const cart = useContext(CartContext);
    const [preload, setPreload] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(cart.preview){
            setPreload(false);
        }
    }, [cart.preview])
  

    function isEmpty(){
        return cart.items.length <= 0;
    }

    function openCart(){
        cart.hidePreview();
        navigate("cart");
    }

    function getItems(){
        return <> 
            <div className="cartItems">
                {cart.items.map((item, index) => {
                    return <CartItem key={index} item={item.item} quantity={item.quantity}/>
                })}
            </div>
            <div className="summary">
                <div className="total">
                    <h3>Subtotal</h3>
                    <h3>${cart.getTotalCost()}</h3>
                </div>
                <RedButton text="View Cart" onClick={openCart}/> 
            </div>
        </>
    }

    function hide(){
        cart.hidePreview();
    }

    function hideOrPreload(){
        return preload?"cartPreview noAnimation":"cartPreview hide"
    }


    return (
        <>
            <div className={cart.preview? "cartPreview":hideOrPreload()}>
                <div className="title">
                    <i onClick={hide} className="fa-solid fa-chevron-right"></i>
                    <h2>Cart</h2>
                    <div></div>
                </div>
                <div className="cart">
                    {isEmpty()? 
                    <p>Cart is empty</p>:
                    getItems()
                    }
                </div>
            </div>
            <div className={cart.preview? "shadow":"shadow hide" } onClick={cart.hidePreview}></div>
        </>
    )
}

export default ShoppingCartViewer;