import React from "react";
import Promo from "./promo/Promo";
import Options from "./options/Options";
import Product from "./product/product";
import Slider from "./slider";
import RedButton from "./Button";

function HomeContent(){
    const add1 = {
        img: [
            "https://static.wixstatic.com/media/c837a6_20940cddd86f444ba764870c37a3d83f~mv2.jpg/v1/fill/w_3444,h_1160,q_90/c837a6_20940cddd86f444ba764870c37a3d83f~mv2.webp",
            "https://static.wixstatic.com/media/c837a6_a02137ecf3104b38aba5c61bbdf6356f~mv2.jpg/v1/fill/w_3444,h_1160,q_90/c837a6_a02137ecf3104b38aba5c61bbdf6356f~mv2.webp",
            "https://static.wixstatic.com/media/c837a6_0050e8536c474ad0acda8086391cb0da~mv2.jpg/v1/fill/w_3444,h_1160,q_90/c837a6_0050e8536c474ad0acda8086391cb0da~mv2.webp"
        ],
        intro: "Easy, Fresh & Convenient",
        main: "Stock Up on Daily Essentials",
        sub: "Save Big on Your Favorite Brands"
    }

    const add2 = {
        img: [
            "https://static.wixstatic.com/media/c837a6_6128c886f6c04d76b67065dee91cd206~mv2.jpg/v1/fill/w_1029,h_517,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_6128c886f6c04d76b67065dee91cd206~mv2.jpg"
        ],
        intro: "Great Deals on",
        main: "Selected Wines",
        sub: "It's Wine O'Cock"
    }

    const add3 = {
        img: [
            "https://static.wixstatic.com/media/84770f_ffdce1fd609a4073b20b39d85f671fe4~mv2.jpg/v1/fill/w_516,h_517,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_ffdce1fd609a4073b20b39d85f671fe4~mv2.jpg"
        ],
        intro: "Deal of the Week",
        main: "40% off",
        sub: "Cleaning Supplies"
    }

    const products =[
        {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s",
        name: "Hand Cream",
        price: 2.99,
        discount: 0.2
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s",
        name: "Hand Cream",
        price: 2.99,
        discount: 0.2
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s",
        name: "Hand Cream",
        price: 2.99,
        discount: 0.2
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s",
        name: "Hand Cream",
        price: 2.99,
        discount: 0.2
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s",
        name: "Hand Cream",
        price: 2.99,
        discount: 0.2
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s",
        name: "Hand Cream",
        price: 2.99,
        discount: 0.2
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vHH_-mm2zQ-BUu-jo1vQsuLvGNKa8YwETQ&s",
        name: "Hand Cream",
        price: 2.99,
        discount: 0.2
    }
]
    return <div className="home-content">
        <div className="main-promo">
            <Promo content={add1}/>
            <section className="content">
                <Options/>
                <div className="deals">
                    <div>
                        <h2>Best Deals</h2>
                        <Slider products={products}/>
                    </div>
                    <RedButton text="Shop Best Deals"/>
                </div>
                <div className="promos">
                    <Promo content={add2}/>
                    <Promo content={add3}/>
                </div>
            </section>
            
        </div>
    </div>
}

export default HomeContent;