import React from "react";

function Quantity(props){

    return <div className="quantity">
        <button onClick={() => {
            props.decrease();
        }} className={props.quantity <= 1 && "hidden"}>-</button>
        <p>{props.quantity}</p>
        <button onClick={() => {
            props.increase();
        }}>+</button>
    </div>
}

export default Quantity;