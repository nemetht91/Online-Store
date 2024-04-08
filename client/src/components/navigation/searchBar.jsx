import React from "react";
import './navbar.css'

function SearchBar(){
    return (
        <form action="/search" method="POST">
            <div class="form-group fg--search">
                <input type="text" class="input" placeholder="search" name="movieTitle"/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        </form>  
    )
}

export default SearchBar;