import React from "react";
import "./category.css"
import { useNavigate } from "react-router-dom";



function Category(props){

    const navigate = useNavigate();

    function handleClick(){
        navigate(`/products/${props.category.name}`)
    }

    return <div onClick={handleClick} className="category">
        <div className="background"></div>
        <img src={props.category.img} alt={props.category.name} />
        <a href={props.category.url}>
            <h3>{props.category.name}</h3>
        </a>
    </div>
}

export default Category;