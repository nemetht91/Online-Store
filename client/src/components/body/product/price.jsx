import React from "react";

function Price(props){

    function HasDiscount(){
        return props.detail.discount > 0;
    }

    function GetDiscountedPrice(){
        return Math.round(props.detail.price * (1 - props.detail.discount)*100)/100;
    }

    function GetPrice(){
        if(!HasDiscount()){
            return <p>£{props.detail.price}</p>
        }
        return <>
            <p className="old-price">£{props.detail.price}</p>
            <p>£{GetDiscountedPrice()}</p>
        </>
    }

    return <div className="price">
        {GetPrice()}
    </div>
}

export default Price;