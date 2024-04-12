import React, {useState} from "react";
import PromoImg from "./PromoImg";
import "./promo.css"
import RedButton from "../Button";


function Promo(props){


    return <div className="promo">
            <PromoImg imgs={props.content.img}/>
        <div className="text">
            <h3>{props.content.intro}</h3>
            <h2>{props.content.main}</h2>
            <h4>{props.content.sub}</h4>
            <RedButton text="Shop Now"/>
        </div>
    </div>
}

export default Promo;