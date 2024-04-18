import React, {useState, useEffect} from "react";
import Promo from "./promo/Promo";
import Options from "./options/Options";
import Slider from "./slider";
import RedButton from "./Button";
import promos from "../../../data/promos";
import categories from "../../../data/categories";
import Categories from "./Category/categories";
import dataFetcher from "../../../dataFetch";

function HomeContent(){

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dataFetcher.getAllProducts();

            setProducts(data);
        }
        fetchProducts();
    }, []);

    return <div className="home-content">
        <div className="main-promo">
            <Promo content={promos[0]}/>
        </div>
        <section className="content">
                <Options/>
                <div className="deals"> 
                    <div>
                        <h2 className="title">Best Deals</h2>
                        <Slider products={products}/>
                    </div>
                    <RedButton text="Shop Best Deals"/>
                </div>
                <div className="promos">
                    <Promo content={promos[1]}/>
                    <Promo content={promos[2]}/>
                </div>
                <h2 className="title">Most Popular Categories</h2>
                <Categories categories={categories}/>
                <div className="deals">
                    <div>
                        <h2 className="title">Most Popular</h2>
                        <Slider products={products}/>
                    </div>
                    <RedButton text="Shop Most Popular"/>
                </div>

            </section>
    </div>
}

export default HomeContent;