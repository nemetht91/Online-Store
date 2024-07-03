import React, {useState} from "react";
import Price from "./price";
import "./product.css"
import Quantity from "./quantity";
import { useContext } from "react";
import { CartContext } from "../../../CartContext";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../ProductsContext";
import dataFetcher from "../../../../dataFetch";

function Product(props){

    const [quantity, setQuantity] = useState(1);
    const cart = useContext(CartContext);
    const products = useContext(ProductsContext);
    const navigate = useNavigate();


    function increaseQuantity(){
        setQuantity(quantity + 1);
    }

    function deascreaseQuantity(){
        if(quantity <= 1){
            return
        }
        setQuantity(quantity - 1);
    }

    function handleClick(){
        const redirect = async() => {
            if(props.category == "Deals" || props.category == "Most Popular"){
                const items = await dataFetcher.getDeals();
                products.updateProducts(items, {name: props.category, id: -1});
            }
            else{
                const category = await dataFetcher.getCategoryById(props.detail.categoryId);
                const items = await dataFetcher.getProducts(category.id);
                products.updateProducts(items, {name: category.name, id: category.id});
            }
            navigate(`/products/${props.category}/${props.detail.name}`,{state:{id:props.detail.id}});
        }
        redirect();
        
    }

    return <div className="product">
        <img onClick={handleClick} src={props.detail.img} alt={props.detail.name} />
        <p onClick={handleClick}>{props.detail.name}</p>
        <Price onClick={handleClick} detail={props.detail}/>
        <Quantity quantity={quantity} increase={increaseQuantity} decrease={deascreaseQuantity} />
        <button onClick={() => {
            cart.addOneToCart({item: props.detail, quantity: quantity});
        }} className="cart">Add to Cart</button>
    </div>
}

export default Product