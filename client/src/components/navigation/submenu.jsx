import React from "react";

function SubMenu(props){

    return <div onMouseEnter={() => {props.SubActive()}} onMouseLeave={() => {props.SubDeactive()}} className="subMenu">
        {props.sub?.map((item, index) => {
            return <p key={index}>{item}</p>
        })}
    </div>
}

export default SubMenu;