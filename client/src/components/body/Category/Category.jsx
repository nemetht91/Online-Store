import React from "react";


function Category(props){

    return <div className="category">
        <div className="background"></div>
        <a href={props.category.url}>
            <img src={props.category.img} alt={props.category.name} />
        </a>
        <a href={props.category.url}>
            <h3>{props.category.name}</h3>
        </a>
    </div>
}

export default Category;