import React from "react";
import Product from "./product/product";


function Slider(props){

    return <div className="custom-slide">
        <div className="custom-prev-button"><i class="fa-solid fa-chevron-left"></i></div>
        <swiper-container 
            slides-per-view="5"
            space-between="10"   
            navigation-next-el=".custom-next-button"
            navigation-prev-el=".custom-prev-button"
            loop={true} 
            centeredSlides= {true}
            >
                {props.products.map((product) => {
                    return <swiper-slide><Product detail={product}/></swiper-slide>;
                })}

            </swiper-container>
            
            <div className="custom-next-button"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
    

}

export default Slider;