"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Text_component from '../componet/text_component';
import Gig_card from '../componet/gig_card';

function Top_talent() {

  let data = [{
    "title":"I will Develop android App",
    "name":"Sheraz",
    "level":"level 1",
    "price":"300$"
  },
  {
    "title":"I will Develop android App",
    "name":"Sheraz",
    "level":"level 1",
    "price":"300$"
  },
  {
    "title":"I will Develop android App",
    "name":"Sheraz",
    "level":"level 2",
    "price":"300$"
  },
  {
    "title":"I will Develop android App",
    "name":"Sheraz",
    "level":"level 1",
    "price":"300$"
  }
  ,
  {
    "title":"I will Develop android App",
    "name":"Sheraz",
    "level":"level 2",
    "price":"300$"
  }

];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 754, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // Add more breakpoints and settings as needed
    ]
  };
  
  return (
    <div>
      <Text_component
        title={"Top Rated Talents"}
        button={true}
        second={''}
        onpress={() => {
          // Navigate to the specified page on button press
          // router.push("/sheraz");
          window.location.href="/buying_nav"
        }} 
      />
      <Slider {...settings}>
        {data.map((e,index) => (    
          <div
            key={index.toString()} 
            className='flex-wrap '
            style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
              
              <Gig_card data={e} />
          </div>
        ))}
      </Slider> 
    </div>
  );
}

export default Top_talent;
