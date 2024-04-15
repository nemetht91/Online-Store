import React from "react";
import "./category.css"


function Category(props){

    return <div className="category">
        <div className="background"></div>
        <img src={props.category.img} alt={props.category.name} />
        <a href={props.category.url}>
            <h3>{props.category.name}</h3>
        </a>
    </div>
}

export default Category;