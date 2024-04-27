import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

function Products(){

    const location = useLocation();



    return <div className="products-page">
        <h1>{location.state.name}</h1>
    </div>
}

export default Products;