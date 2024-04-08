import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import ShoppingCart from "./shoppingCart";
import Menu from "./menu";

function Navbar(){
    return (
        <>
            <div className="navbar">
                <Logo/>
                <SearchBar/>
                <ShoppingCart/>
            </div>
            <Menu/>
        </>
        

    )
}

export default Navbar;