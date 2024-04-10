import React from "react";
import Promo from "./promo/Promo";

function HomeContent(){
    const add = {
        img: [
            "https://static.wixstatic.com/media/c837a6_20940cddd86f444ba764870c37a3d83f~mv2.jpg/v1/fill/w_3444,h_1160,q_90/c837a6_20940cddd86f444ba764870c37a3d83f~mv2.webp",
            "https://static.wixstatic.com/media/c837a6_a02137ecf3104b38aba5c61bbdf6356f~mv2.jpg/v1/fill/w_3444,h_1160,q_90/c837a6_a02137ecf3104b38aba5c61bbdf6356f~mv2.webp",
            "https://static.wixstatic.com/media/c837a6_0050e8536c474ad0acda8086391cb0da~mv2.jpg/v1/fill/w_3444,h_1160,q_90/c837a6_0050e8536c474ad0acda8086391cb0da~mv2.webp"
        ],
        intro: "Easy, Fresh & Convenient",
        main: "Stock Up on Daily Essentials",
        sub: "Save Big on Your Favorite Brands"
    }

    return <div className="home-content">
        <div className="main-promo">
            <Promo content={add}/>
        </div>
    </div>
}

export default HomeContent;