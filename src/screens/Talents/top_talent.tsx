"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Text_component from '../componet/text_component';
import Gig_card from '../componet/gig_card';

function Top_talent() {
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
            <Text_component title={"Top Rated Talents"} />
            <Slider {...settings}>
                {data.map((e) => (
                    <div style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
                        <Gig_card />
                    </div>
                ))}
            </Slider>
            <div style={{ height: 100 }} />
        </div>
    );
}

export default Top_talent;

