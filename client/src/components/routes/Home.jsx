import React, {useState, useEffect} from "react";
import Promo from "../body/promo/Promo";
import Options from "../body/options/Options";
import Slider from "../body/slider";
import RedButton from "../body/Button";
import promos from "../../../data/promos";
import dataFetcher from "../../../dataFetch";
import Categories from "../body/Category/categories"

function Home(){

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    
    
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dataFetcher.getAllProducts();

            setProducts(data);
        }

        const fetchCategories = async () => {
            const data = await dataFetcher.getPopularCategories();

            setCategories(data);
        }

        fetchProducts();
        fetchCategories();
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

export default Home;