"use client"
import React, { useEffect, useState } from 'react'
import style from './details.module.css'
import Navbar from '@/homepage/navbar/page'
import After_login_NavBar from '@/homepage/componet/after_login_nav/page'
import All_services from '@/homepage/componet/services/page'
import StarRating from '@/homepage/componet/Starts/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
export default function page() {
    const [domLoaded, setdomLoaded] = useState(false)
    const Category_Array = ["Video & Animation", "App & Website Previews"]
    const Gig_images = ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/448837/original/20fd768872785df8a3a5f932f84167ad1a9f4d3e/do-keyword-research-for-your-niche-or-business.png", "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/448837/original/99a27d78676c7b0e221b9e7c326826e411b11eda/do-keyword-research-for-your-niche-or-business.jpg"]
    const [currentIndex, setCurrentIndex] = useState(1);


    const goToNext = () => {
 

        setCurrentIndex((prevIndex) => (prevIndex + 1) % Gig_images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Gig_images.length) % Gig_images.length);
    };
    const Custom_index=(index:number)=>{
        setCurrentIndex(index)

    }
    useEffect(() => {
        setdomLoaded(true)
    }, [])
    return (
        <div>
            {domLoaded && (
                <div className={style.main_container}>
                    <After_login_NavBar />
                    <All_services />
                    <div className={style.service}>
                        <div className={style.GigDetails}>

                            <div className={style.Category_Container}>
                                {Category_Array.map((e, i) => (
                                    <React.Fragment key={i}>
                                        {i === 0 ? (
                                            <span>{e}</span>
                                        ) : (
                                            <>
                                                <span>{'>'}</span>
                                                <span>{e}</span>
                                            </>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div style={{ height: 10 }} />
                            <span className={style.title}>I will create an amazing website or app promo video</span>
                            <div style={{ height: 10 }} />
                            <div className={style.userdetails}>
                                <div className={style.usericon}>
                                    <img
                                        src='https://avatars.githubusercontent.com/u/90733116?v=4'
                                    />
                                </div>
                                <span className={style.username}>Air123</span>
                                <span className={style.userlevel}>Level 2 Seller</span>
                                <span className={style.divider}>|</span>
                                <div>
                                    <StarRating rating={4.5} />
                                </div>
                                <span className={style.total_orders}>(902)</span>
                                <span className={style.Queues}>3 Orders in List</span>

                            </div>
                            <div style={{ height: 15 }} />
                            <div className={style.gig_images}>
                                <div className={style.Images_preview}>
                                    {Gig_images.map((e, i) => (
                                        <div 
                                        onClick={()=>Custom_index(i)}
                                        className={style.img_preview}>

                                            < img

                                                src={e}
                                            />
                                        </div>
                                    ))

                                    }
                                </div>
                                <div className={style.larg_images}>
                                    <div className={style.large_preview}>

                                        < img

                                            src={Gig_images[currentIndex]}
                                        />
                                        <div className={style.slider_controls}>
                                            <button onClick={goToPrevious} className={style.slider_button_left}>
                                                <IoIosArrowBack fontSize={34} color='black' />

                                            </button>
                                            <button onClick={goToNext} className={style.slider_button_right}>
                                                <IoIosArrowForward fontSize={34} color='black' />
                                            </button>

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <span>Hello WOrld</span>

                    </div>

                </div>

            )

            }
        </div>
    )
}
