import React from "react";

function RedButton(pros){

    return <button onClick={() => pros.onClick()} className="red-button">{pros.text}</button>
}


export default RedButton;