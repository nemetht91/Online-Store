import React, {useState, useEffect} from "react";
import SubMenu from "./submenu";
import { useNavigate } from "react-router-dom";

function MenuItem(props){
    const [isActive, setIsActice] = useState(false);
    const [isSubActive, setIsSubctive] = useState(false)
    const navigate = useNavigate();

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
        return props.menu.sub.length > 0;
    }

    function handleClick(){
        if(IsSubMenu()){
            return;
        }
        navigate(`/products/${props.menu.main}`,{state:{name:props.menu.main}});
    }

    return <div className="menuItem">
        <p 
        className={!IsSubMenu()? "clickable":""} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}>
            {props.menu.main}
        </p>
        { (isActive || isSubActive) && <SubMenu sub={props.menu.sub} main={props.menu.main} SubActive={SubActive} SubDeactive={SubDeactive}/>}
    </div>
}

export default MenuItem;