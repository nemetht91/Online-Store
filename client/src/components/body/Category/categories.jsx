import React from "react";
import Category from "./Category";
import "./category.css"


function Categories(props){

    return <div className="categories">
        {props.categories.map((category, index) => {
            return <Category key={index} category={category}/>
        })}
    </div>
}

export default Categories;