import React from "react";

function Add(props){
    return <div className="add">
        <img src={props.img} alt="" />
        <div className="text">
            <h3>{props.intro}</h3>
            <h2>{props.main}</h2>
            <h4>{props.sub}</h4>
            <button>Shop Now</button>
        </div>
    </div>
}

export default Add;