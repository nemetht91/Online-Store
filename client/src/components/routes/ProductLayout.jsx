import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { Link } from "react-router-dom";



function ProductLayout(props){

    const products = useContext(ProductsContext);

    return <div className="productLayout">
        <div>
            <Link to="/">Home</Link>
            <p>/</p>
            <Link to={`/products/${products.category.name}`} state={{name:products.category.name, id: products.category.id}}>{products.category.name}</Link>
            <p>/</p>
            <p className="productName"></p>
        </div>
    </div>
}

export default ProductLayout;