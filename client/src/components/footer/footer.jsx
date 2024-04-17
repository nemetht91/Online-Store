import React from "react";
import "./footer.css"
import Banner from "./banner";
import Menu from "../navigation/menu";
import Logo from "../navigation/logo";
import categories  from "../../../data/categories";

function Footer(){

    return <footer>
        <Banner />
        <div className="footer-nav">
            <div className="help">
                <Logo />
                <h3>Need Help?</h3>
                <p>Visit our 
                    <a href=""> Customer Support</a>
                    <br />
                    for assistance or call us at
                </p>
                <h3>123-456-789</h3>
            </div>
            <div>
                <h2>Menu</h2>
                <Menu/>
            </div>
            <div>
                <h2>Categories</h2>
                <div className="links">
                    {categories.map((category, index) => {
                        return (<a href={category.url}>{category.name}</a>)
                    })}
                </div>
            </div>
            <div>
                <h2>Info</h2>
                <div className="links">
                    <a href="">FAQ</a>
                    <a href="">About Us</a>
                    <a href="">Customer Support</a>
                    <a href="">Locations</a>
                </div>
            </div>
            <div>
                <h2>My Choice</h2>
                <div className="links">
                    <a href="">Favorites</a>
                    <a href="">My Orders</a>
                </div>
            </div>
            
        </div>
        <div className="info">
            <div className="links">
                <a href="">Shipping & Returns</a>
                <a href="">Terms & Conditions</a>
                <a href="">Payment Methods</a>
            </div>
            <p>© {new Date().getFullYear()} by Online Store</p>
        </div>
    </footer>
}

export default Footer;