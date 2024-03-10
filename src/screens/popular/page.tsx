"use client"
import React from 'react';
import style from './popular.module.css';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";               //here
import "slick-carousel/slick/slick-theme.css"; 

export default function Popular() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,

  };
  

  return (
    <div className={style.main_container}>
      <div className={style.Popular}>
        <div className={style.popularContent}>
          <div className={style.tagline}>
            <span>Most Popular Services</span>
            <Image src={"/trafiic.svg"} alt="Traffic Icon" width={30} height={30} />
          </div>
          <div className={style.viewAll}>
            <span>View All</span>
            <Image src={"/viewAll.svg"} alt="View All Icon" width={30} height={30} />
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {data.map((e) => (
          <div key={e} className={style.itemCard}>
            <div className={style.imageOverlay}>
              <Image src={"/coding.svg"} alt="Coding Icon" width={10} height={20} />
              <span>
                WEB <br />
                DEVELOPMENT
              </span>
            </div>
            <Image
              src={"/developer.png"}
              alt="Developer Image"
              width={215}
              height={223}
              objectFit="cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
