import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import ShoppingCart from "./shoppingCart";

function Navbar(){
    return (
        <div className="navbar">
            <Logo/>
            <SearchBar/>
            <ShoppingCart/>
        </div>
    )
}

export default Navbar;