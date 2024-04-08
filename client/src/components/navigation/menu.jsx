import React, {useState, useEffect} from "react";
import MenuItem from "./menuItem";

function Menu(){

    const stucture = [
        {main: "Deals", sub:[]},
        {main: "Food", sub:["Vegtable", "Fruit", "Meat & Poultry", "Fish & Seafood", "Dairy & Egg", "Bakery", "Pastas & Grains", "Cereals and Snacks"]},
        {main: "Beverages", sub:["Tea", "Coffee", "Soft Drinks", "Beer", "Wine"]},
        {main: "Household", sub:["Home & Kitchen", "Cleaning Supplies"]},
        {main: "Personal Care", sub:["Personal Hygiene", "Babies"]},
        {main: "Most Popular", sub:[]},
        {main: "My Orders", sub:[]},
    ]

    return <div className="menu">
        {stucture.map((item, index) => {
            return <MenuItem key={index} menu={item}/>
        })}
    </div>
}

export default Menu;