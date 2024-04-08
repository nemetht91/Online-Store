import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";

function Navbar(){
    return (
        <div className="navbar">
            <Logo/>
            <SearchBar />
        </div>
    )
}

export default Navbar;