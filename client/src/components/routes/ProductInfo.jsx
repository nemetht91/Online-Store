import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import dataFetcher from "../../../dataFetch";
import Info from "../body/productInfo/info";
import Price from "../body/product/price";
import Quantity from "../body/product/quantity";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import ProductLayout from "./ProductLayout";


function ProductInfo(){
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [isActive, setIsActive] = useState([true, false, false]);

    const cart = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();



    function increaseQuantity(){
        setQuantity(quantity + 1);
    }

    function deascreaseQuantity(){
        if(quantity <= 1){
            return
        }
        setQuantity(quantity - 1);
    }

    function hanldeClick(id){
        if(id < 0 || id >= isActive.length){
            return;
        }
        setIsActive((prevValue) => {
            prevValue = prevValue.map((value, index) => {
                if(index == id){
                    return !value;
                }
                return false;
            })
            
            return prevValue;
        })
    }


    useEffect(() => {
        const fetchProduct = async () => {
            const data = await dataFetcher.getProduct(location.state.id);
            setProduct(data);
        }

        if(location.state == undefined){
            navigate('/pagenotfound');
        }
        else{
            fetchProduct();
        }
        
    }, [location]);

    return <div className="page">
    <ProductLayout id={product.id}/>
        <div className="productInfo">
            <img src={product.img} alt={product.name} />
            <div className="details">
                <div className="product">
                    <h2>{product.name}</h2>
                    <p>SKU: {product.id}</p>
                    <Price detail={product}/>
                    <Quantity quantity={quantity} increase={increaseQuantity} decrease={deascreaseQuantity} />
                    <button onClick={() => {
                        cart.addOneToCart({item: product, quantity: quantity});
                    }} className="cart">Add to Cart</button>
                </div>
                <div className="infos">
                    <Info id={0} isActive={isActive[0]} clicked={hanldeClick} title="Product Info" text="I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty."/>
                    <Info id={1} isActive={isActive[1]} clicked={hanldeClick} title="Return & Refund Policy" text="I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."/>
                    <Info id={2} isActive={isActive[2]} clicked={hanldeClick} title="Shipping Info" text="I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."/>
                </div>
            </div>
        </div>
    </div>
    
}

export default ProductInfo;