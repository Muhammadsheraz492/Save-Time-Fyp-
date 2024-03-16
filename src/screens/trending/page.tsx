"use client"
import React from 'react'
import Text_component from '../componet/text_component'
import style from './trending.module.css'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";               //here
import "slick-carousel/slick/slick-theme.css"; 

import Seller_component from '../componet/seller_component'
function Trending_Seller() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8];

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
  
    };
    
    return (
        <div>
            <Text_component title={"Trending"} button={false} second={'Sellers'} />
             <Slider {...settings}>
        {data.map((e) => (
             <Seller_component />
          
        ))}
        </Slider>
            <div style={{ height: 100 }} />
        </div>
    )
}

export default Trending_Seller