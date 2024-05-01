import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



function ProductLayout(props){

    const products = useContext(ProductsContext);
    const params = useParams();

    return <div className="productLayout">
        <div>
            <Link to="/">Home</Link>
            <p>/</p>
            <Link to={`/products/${params.category}`} state={{name:params.category, id: products.category.id}}>{params.category}</Link>
            <p>/</p>
            <p className="productName">{params.productName}</p>
        </div>
    </div>
}

export default ProductLayout;