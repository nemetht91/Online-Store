import React from "react";
import { useNavigate } from "react-router-dom";


function SubMenu(props){
    const navigate = useNavigate();

    return <div onMouseEnter={() => {props.SubActive()}} onMouseLeave={() => {props.SubDeactive()}} className="subMenu">
        {props.sub?.map((item, index) => {
            return <p onClick={() => {
                navigate(`/${props.main.url}/${item.name}`, {state:{name:item.name, id: item.id}});
            }} key={index}>{item.name}</p>
        })}
    </div>
}

export default SubMenu;