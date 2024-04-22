import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import ShoppingCartToogle from "../shoppingCart/shoppingCartToogle";
import Menu from "./menu";

function Navbar(){
    return (
        <>
            <div className="navbar">
                <Logo/>
                <SearchBar/>
                <ShoppingCartToogle/>
            </div>
            <Menu/>
        </>
        

    )
}

export default Navbar;