import React from "react";

function Info(props){

    function hanldeClick(){
        props.clicked(props.id);
    }

    return <div className="info">
        <div onClick={hanldeClick} className="title">
            <h3>{props.title}</h3>
            <p>{props.isActive?"-":"+"}</p>
        </div>
        {props.isActive && <p>{props.text}</p>}
    </div>
}

export default Info;