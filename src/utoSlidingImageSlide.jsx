import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoSlidingImageSlider=() =>{

    
    const image =[
        "https://via.placeholder.com/600x300?text=Image+1",
        "https://via.placeholder.com/600x300?text=Image+2",
        "https://via.placeholder.com/600x300?text=Image+3",
        "https://via.placeholder.com/600x300?text=Image+4",
    ];

    const settings ={
        dots:true,
        Infinity:true,
        speed:500,
        slideToShow:1,
        slideToSroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:true,
    };
    return(
        <div style={{width:"600px",margin:"0 auto"}}>
            <Slider {...settings}>
                {images.map((img,index) =>(
                    <div key={index}>
                        <img 
                        src={img}
                        alt={'slides-${index}'}
                        style={{width:"100%",height:"300px",objectFit:"cover"}}
                        />

                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default AutoSlidingImageSlider;