import React, {useState, useEffect} from "react";
import SubMenu from "./submenu";

function MenuItem(props){
    const [isActive, setIsActice] = useState(false);
    const [isSubActive, setIsSubctive] = useState(false)

    function handleMouseEnter(){
        setIsActice(true);
    }

    function handleMouseLeave(){
        setIsActice(false)
    }

    function SubActive(){
        setIsSubctive(true);
    }

    function SubDeactive(){
        setIsSubctive(false);
    }

    return <div className="menuItem">
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{props.menu.main}</p>
        { (isActive || isSubActive) && <SubMenu sub={props.menu.sub} SubActive={SubActive} SubDeactive={SubDeactive}/>}
    </div>
}

export default MenuItem;