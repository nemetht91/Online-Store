import React, {useState, useEffect} from "react";
import SubMenu from "./submenu";
import { useNavigate } from "react-router-dom";

function MenuItem(props){
    const [isActive, setIsActice] = useState(false);
    const [isSubActive, setIsSubctive] = useState(false)
    const navigate = useNavigate();
    const {main, sub} = props.menu;

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
        return sub.length > 0;
    }

    function handleClick(){
        if(IsSubMenu()){
            return;
        }
        navigate(`/${main.url}/${main.name}`,{state:{name:main.name}});
    }

    return <div className="menuItem">
        <p 
        className={!IsSubMenu()? "clickable":""} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}>
            {main.name}
        </p>
        { (isActive || isSubActive) && <SubMenu sub={sub} main={main} SubActive={SubActive} SubDeactive={SubDeactive}/>}
    </div>
}

export default MenuItem;