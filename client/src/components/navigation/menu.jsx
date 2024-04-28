import React, {useState, useEffect} from "react";
import MenuItem from "./menuItem";
import stucture from "./menustructure";

function Menu(){



    return <div className="menu">
        {stucture.map((item, index) => {
            return <MenuItem key={index} menu={item}/>
        })}
    </div>
}

export default Menu;