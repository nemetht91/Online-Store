import React, {useState} from "react";

function Add(props){

    const [currentImg, setCurrentImg] = useState(0);

    setTimeout(() => {
        if(props.content.img.length <= 1){
            return;
        }
        if(currentImg >= props.content.img.length -1){
            setCurrentImg(0);
            return;
        }
        setCurrentImg(currentImg+1);
    }, 5000)

    return <div className="add">
            <img src={props.content.img[currentImg]} alt="" />
        <div className="text">
            <h3>{props.content.intro}</h3>
            <h2>{props.content.main}</h2>
            <h4>{props.content.sub}</h4>
            <button>Shop Now</button>
        </div>
    </div>
}

export default Add;