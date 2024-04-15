import React from "react";
import Promo from "./promo/Promo";
import Options from "./options/Options";
import Product from "./product/product";
import Slider from "./slider";
import RedButton from "./Button";
import promos from "../../../data/promos";
import products from "../../../data/products";
import categories from "../../../data/categories";
import Categories from "./Category/categories";

function HomeContent(){
    

    
    return <div className="home-content">
        <div className="main-promo">
            <Promo content={promos[0]}/>
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
                <div>
                    <h2 className="title">Most Popular</h2>
                    <Slider products={products}/>
                </div>
            </section>
            
        </div>
    </div>
}

export default HomeContent;