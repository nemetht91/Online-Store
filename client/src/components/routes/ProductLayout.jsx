import React, {useEffect, useState, useContext} from "react";
import { ProductsContext } from "../../ProductsContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function ProductLayout(props){

    const products = useContext(ProductsContext);
    const params = useParams();
    const [productIndex, setProductIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const index = products.items.findIndex((product) => {
            return product.name == params.productName;
        })
        setProductIndex(index);
    }, [params]);

    function isFirst(){
        return productIndex == 0;
    }

    function isLast(){
        return productIndex == products.items.length-1;
    }

    function goToPrevious(){
        if(isFirst()){
            return;
        }
        const previous = products.items[productIndex - 1];
        navigate(`/products/${params.category}/${previous.name}`);
    }

    function goToNext(){
        if(isLast()){
            return;
        }
        const next = products.items[productIndex + 1];
        navigate(`/products/${params.category}/${next.name}`);
    }

    return <div className="productLayout">
        <div>
            <Link className="link" to="/">Home</Link>
            <p>/</p>
            <Link className="link" to={`/products/${params.category}`} state={{name:params.category, id: products.category.id}}>{params.category}</Link>
            <p>/</p>
            <p className="productName">{params.productName}</p>
        </div>
        <div>
            <p onClick={goToPrevious} className={isFirst()?"link disabled":"link"}><i className="fa-solid fa-chevron-left"></i> Prev</p>
            <p> | </p>
            <p onClick={goToNext} className={isLast()?"link disabled":"link"}>Next <i className="fa-solid fa-chevron-right"></i></p>

        </div>
    </div>
}

export default ProductLayout;