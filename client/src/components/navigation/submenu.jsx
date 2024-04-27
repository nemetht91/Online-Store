import React from "react";
import { useNavigate } from "react-router-dom";


function SubMenu(props){
    const navigate = useNavigate();

    return <div onMouseEnter={() => {props.SubActive()}} onMouseLeave={() => {props.SubDeactive()}} className="subMenu">
        {props.sub?.map((item, index) => {
            return <p onClick={() => {
                navigate(`/products/${props.main}/${item}`, {state:{name:item}});
            }} key={index}>{item}</p>
        })}
    </div>
}

export default SubMenu;