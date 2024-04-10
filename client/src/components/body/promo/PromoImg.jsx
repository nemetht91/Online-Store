import React, {useState} from "react";

function PromoImg(props){

    const [currentImg, setCurrentImg] = useState(0);

    setTimeout(() => {
        if(props.imgs.length <= 1){
            return;
        }
        if(currentImg >= props.imgs.length -1){
            setCurrentImg(0);
            return;
        }
        setCurrentImg(currentImg+1);
    }, 5000);

    return <>
        {props.imgs.map((img, index) => {
            return <img src={img} key={index} 
            className={index == currentImg ? "showImage": "hideImage"}></img>
        })}
    </>
}

export default PromoImg;