"use client"
import React, { useEffect, useState } from 'react'
import style from './details.module.css'
import Navbar from '@/homepage/navbar/page'
import After_login_NavBar from '@/homepage/componet/after_login_nav/page'
import All_services from '@/homepage/componet/services/page'
import StarRating from '@/homepage/componet/Starts/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function page() {
    const [domLoaded, setdomLoaded] = useState(false)
    const Category_Array = ["Video & Animation", "App & Website Previews"]
    const Gig_images = ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/448837/original/20fd768872785df8a3a5f932f84167ad1a9f4d3e/do-keyword-research-for-your-niche-or-business.png", "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/448837/original/99a27d78676c7b0e221b9e7c326826e411b11eda/do-keyword-research-for-your-niche-or-business.jpg"]
    useEffect(() => {
        setdomLoaded(true)
    }, [])
    return (
        <>
            {domLoaded && (
                <>
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
                                        <div className={style.img_preview}>

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

                                            src={"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/448837/original/20fd768872785df8a3a5f932f84167ad1a9f4d3e/do-keyword-research-for-your-niche-or-business.png"}
                                        />
                                        {/* <FontAwesomeIcon icon={faArrowLeft} size="2x" /> */}
                                        <div className="slider-controls">
                                            <button onClick={() => { }} className="slider-button left">
                                                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                                            </button>
                                            <button className="slider-button right">
                                                <FontAwesomeIcon icon={faArrowRight} size="2x" />
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <span>Hello WOrld</span>

                    </div>

                </>

            )

            }
        </>
    )
}
