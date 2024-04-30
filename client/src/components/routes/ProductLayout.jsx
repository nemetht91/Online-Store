import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";


function ProductLayout(){

    return <div className="productLayout">
        <div>
            <Link to="/">Home</Link>
            <p>/</p>
            <Lin to={`/${location.state}`}></Lin>
        </div>
    </div>
}