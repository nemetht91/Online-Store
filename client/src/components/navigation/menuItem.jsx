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

    function IsSubMenu(){
        console.log(props.menu.sub.length  > 0);
        return props.menu.sub.length > 0;
    }

    return <div className="menuItem">
        <p className={!IsSubMenu() && "clickable"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{props.menu.main}</p>
        { (isActive || isSubActive) && <SubMenu sub={props.menu.sub} SubActive={SubActive} SubDeactive={SubDeactive}/>}
    </div>
}

export default MenuItem;