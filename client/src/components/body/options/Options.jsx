import React from "react";
import "./options.css"

function Options(){

    return <div className="options">
        <div className="option">
            <i class="fa-solid fa-truck"></i>
            <div className="text">
                <h2>Free Delivery</h2>
                <p>To Your Door</p>
            </div>
        </div>
        <div class="divider"></div>
        <div className="option">
            <i class="fa-solid fa-basket-shopping"></i>
            <div className="text">
                <h2>Local Pickup</h2>
                <p>Check Out <a href="">Locations</a></p>
            </div>
        </div>
        <div class="divider"></div>
        <div className="option">
            <i class="fa-solid fa-headset"></i>
            <div className="text">
                <h2>Available for You</h2>
                <p><a href="">Online Support</a> 24/7</p>
            </div>
        </div>
        <div class="divider"></div>
        <div className="option">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <div className="text">
                <h2>Order on the Go</h2>
                <p><a href="">Download</a> Our App</p>
            </div>
        </div>
    </div>
}

export default Options;