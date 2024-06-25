"use client"
import React, { useEffect, useState } from 'react'
import style from './details.module.css'
import Navbar from '@/homepage/navbar/page'
import After_login_NavBar from '@/homepage/componet/after_login_nav/page'
import All_services from '@/homepage/componet/services/page'
import StarRating from '@/homepage/componet/Starts/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from 'next/image'
import Gig_card from '@/homepage/componet/gig_card'
export default function page() {
    const [domLoaded, setdomLoaded] = useState(false)
    const Category_Array = ["Video & Animation", "App & Website Previews"]
    const Gig_images = ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/448837/original/20fd768872785df8a3a5f932f84167ad1a9f4d3e/do-keyword-research-for-your-niche-or-business.png", "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/448837/original/99a27d78676c7b0e221b9e7c326826e411b11eda/do-keyword-research-for-your-niche-or-business.jpg"]
    const [currentIndex, setCurrentIndex] = useState(1);

    var items = Array.from(Array(Math.floor(window.innerWidth / 500)).keys());
    const starts = [
        {
            star: 5, total_order: 902, current_order: 812, title: "Rating Breakdown",
        },
        {
            star: 4, total_order: 902, current_order: 800, title: "Seller communication level",
        },
        {
            star: 3, total_order: 902, current_order: 500, title: "Recommend to a friend",
        },
        {
            star: 2, total_order: 902, current_order: 400, title: "Service as described",
        },
        {
            star: 1, total_order: 902, current_order: 200, title: "Service as described",
        }
    ]

    const goToNext = () => {


        setCurrentIndex((prevIndex) => (prevIndex + 1) % Gig_images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Gig_images.length) % Gig_images.length);
    };
    const Custom_index = (index: number) => {
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

                    <div className={style.service}>
                        <div className={style.GigDetails}>


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
                                            onClick={() => Custom_index(i)}
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
                            <div style={{ height: 30 }} />
                            <span className={style.about_gig}>About This Gig</span>
                            <div style={{ height: 30 }} />
                            <span className={style.gig_desc}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <div style={{ height: 30 }} />
                            <span className={style.about_gig}>About The Seller</span>
                            <div style={{ height: 30 }} />
                            <div className={style.seller_user}>
                                <div className="flex items-center">
                                    <div className="relative">
                                        <div
                                            // src='https://avatars.githubusercontent.com/u/90733116?v=4'
                                            style={{
                                                width: 120,
                                                height: 120,
                                                backgroundColor: "#000",
                                                borderRadius: "50%",
                                            }}

                                        />
                                        {/* <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border border-white rounded-full"></div> */}
                                    </div>
                                </div>
                                <div className="">

                                    <div className={style.seller_deatils}>
                                        <span className={style.username}>
                                            airb123
                                        </span>
                                        <div className={style.seller_rating}>
                                            <StarRating rating={4.5} />
                                            <span className={style.total_orders}>(974)</span>
                                        </div>
                                        <div style={{ height: 5 }} />


                                        <div className={style.contact_me}>
                                            <span className={style.contact_title}>Contact Me</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div style={{ height: 30 }} />
                            <div className={style.seller_info}>
                                <div style={{ height: 30 }} />


                                <div className={style.basic_info}>
                                    <div className={style.info_card}>
                                        <div className={style.from} style={{ width: "50%" }}>
                                            <span className={style.form_title}>From</span>
                                            <span className={style.form_data}>Pakistan</span>
                                        </div>
                                        <div className={style.from}>
                                            <span className={style.form_title}>Member since</span>
                                            <span className={style.form_data}>Aug 2019</span>
                                        </div>
                                    </div>
                                    <div style={{ height: 25 }} />
                                    <div className={style.info_card}>
                                        <div className={style.from} style={{ width: "50%" }}>
                                            <span className={style.form_title}>Avg. response time</span>
                                            <span className={style.form_data}>Pakistan</span>
                                        </div>
                                        <div className={style.from}>
                                            <span className={style.form_title}>Last delivery</span>
                                            <span className={style.form_data}>about 3 hours</span>
                                        </div>
                                    </div>
                                    <div style={{ height: 25 }} />
                                    <div className={style.info_card}>
                                        <div className={style.from} style={{ width: "50%" }}>
                                            <span className={style.form_title}>Languages</span>
                                            <span className={style.form_data}>English</span>
                                        </div>

                                    </div>
                                    <div style={{ height: 25 }} />


                                    <div style={{ width: "100%", backgroundColor: "#424242", height: 1 }} />
                                    <div style={{ height: 25 }} />

                                    <span className={style.description}>t Airbluesoft Premium Digital Studio we create all kinds of creative videos, specializing in Creating Promos( Website, Apps, Fashion, Real Estate, Youtube, NFT) and all other promos and all instructional videos.

                                        We Create Basic To High-End Videos.

                                        Creativity Beyond the Limits.
                                        -Airbluesoft Premium Digital Studio-</span>
                                </div>
                                <div style={{ height: 30 }} />

                            </div>




                        </div>


                        <div className={style.Pricing_box}>
                            <div className={style.packages}>
                                <span className={style.package_item}>
                                    Basic
                                </span>
                                <span className={style.package_item_unactive}>
                                    Standard
                                </span>
                                <span className={style.package_item_unactive}>
                                    Premium
                                </span>
                            </div>
                            <div className={style.details}>
                                <div style={{ height: 10 }} />

                                <div className={style.custom_package}>

                                    <span className={style.custom_package_title}>Basic Promo</span>
                                    <span className={style.custom_package_price}>$868</span>

                                </div>

                                <span className={style.pack_desc}>Basic Package Only Laptop-scenes Includes, Background Music,Logo, and 720HD Video</span>
                                <div className={style.delivery_time_card}>
                                    <div className={style.days_card}>

                                        <Image
                                            src={"/delivery_days.svg"}
                                            alt='Develiery Time'
                                            width={20}
                                            height={20}

                                        />
                                        <span className={style.delivery_days}>4 Days Delivery</span>
                                    </div>
                                    <div className={style.days_card}>

                                        <Image
                                            src={"/revision.svg"}
                                            alt='Develiery Time'
                                            width={20}
                                            height={20}

                                        />
                                        <span className={style.Revision}>1 Revision</span>
                                    </div>
                                </div>
                                <div className={style.service_cards}>
                                    <div className={style.service_card}>
                                        <Image
                                            src={"/checklist.svg"}
                                            alt='Develiery Time'
                                            width={20}
                                            height={20}

                                        />
                                        <span className={style.service_title}>8 Cpations</span>
                                    </div>
                                    <div className={style.service_card}>
                                        <Image
                                            src={"/checklist.svg"}
                                            alt='Develiery Time'
                                            width={20}
                                            height={20}

                                        />
                                        <span className={style.service_title}>8 Cpations</span>
                                    </div>
                                    <div className={style.service_card}>
                                        <Image
                                            src={"/checklist.svg"}
                                            alt='Develiery Time'
                                            width={20}
                                            height={20}
                                            style={{ opacity: 0.4 }}

                                        />
                                        <span className={style.service_title}>8 Cpations</span>
                                    </div>

                                </div>

                                <div>
                                    {/* <span>Continue</span> */}
                                    <div className={style.button_container}
                                        style={{ backgroundColor: "#00A79D", borderColor: "#00A79D" }}
                                    >
                                        <button className={style.custom_button}>
                                            <span className={style.button_title}>Continue</span>

                                            <FaArrowRight className={style.button_icon} />

                                        </button>
                                    </div>
                                    <div style={{ height: 10 }} />
                                    <div className={style.button_container}>
                                        <button className={style.contact_button}>
                                            <span className={style.contact_button_title}>Contact Seller</span>
                                            <span className={style.button_icon}>

                                            </span>

                                        </button>
                                    </div>
                                    <div style={{ height: 20 }} />


                                </div>



                            </div>
                        </div>


                    </div>
                    <div className={style.Category_Container} style={{ flexDirection: "column" }}>
                        <div style={{ height: 20 }} />

                        <span className={style.about_gig}>Recommended For You</span>
                        <div style={{ height: 20 }} />
                        <div className={style.gigCards}>
                            {items.map((e) => (
                                <Gig_card />
                            ))

                            }

                        </div>
                        <div style={{ height: 20 }} />

                        <span className={style.about_gig}>Related Tags </span>
                        <div style={{ height: 20 }} />
                        <div className={style.tags}>
                            <div className={style.tag}>
                                <span className={style.tag_text}>Web promotion</span>
                            </div>
                            <div className={style.tag}>
                                <span className={style.tag_text}>ad</span>
                            </div>
                            <div className={style.tag}>
                                <span className={style.tag_text}>promo</span>
                            </div>
                        </div>
                        <div style={{ height: 20 }} />

                        <span className={style.about_gig}>Reviews</span>
                        <div style={{ height: 20 }} />
                        <div className={style.gig_reviews}>
                            <span className={style.gig_review}>902 reviews for this Gig</span>
                            <StarRating rating={3.5} />
                        </div>
                        <div style={{ height: 5 }} />
                        {starts.map((e, i) => (

                            <div className={style.starts}>
                                <div className={style.start_line}>
                                    <span className={style.start_title}>{e.star}Stars</span>
                                    <div className={style.Outerline}>

                                        <div
                                            style={{
                                                width: `${(e.current_order / e.total_order) * 100}%`,

                                                backgroundColor: "#FFB33E",
                                                height: 8,
                                                flexShrink: 0,
                                                borderRadius: 50
                                            }}
                                        />
                                    </div>
                                    <span className={style.start_order}>({e.current_order})</span>
                                </div>
                                <span className={style.rating_breakdown}>{e.title}</span>
                            </div>
                        ))


                        }
                        <div style={{ height: 10 }} />
                        <div style={{ width: "60%", backgroundColor: "#DADBDD", height: 1 }} />
                        <div style={{ height: 10 }} />
                        <div style={{ width: "60%" }} >
                            <div style={{ height: 10 }} />
                            <div className='flex items-start gap-5'>
                                <div className="flex items-center">
                                    <div >
                                        <div
                                            // src='https://avatars.githubusercontent.com/u/90733116?v=4'
                                            style={{
                                                width: 80,
                                                height: 80,
                                                backgroundColor: "#000",
                                                borderRadius: "50%",
                                            }}

                                        />
                                        {/* <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border border-white rounded-full"></div> */}
                                    </div>
                                </div>
                                <div className="">
                                    <div style={{ height: 5 }} />


                                    <div className={style.seller_deatils}>
                                        <span className={style.username}>
                                            airb123
                                        </span>
                                        <div className={style.seller_rating}>
                                            <Image
                                                src={"/checklist.svg"}
                                                alt='Develiery Time'
                                                width={20}
                                                height={20}
                                                style={{ opacity: 0.4 }}

                                            />
                                            <span className={style.country}>United States</span>
                                        </div>



                                    </div>
                                    <div style={{ height: 20 }} />
                                    <div className='flex items-start gap-2'>

                                        <StarRating rating={5} />
                                        <span className={style.month}>2 months ago</span>
                                    </div>
                                    <div style={{ height: 20 }} />
                                    <span className={style.review_des}>
                                        Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. highly satisfied. thank you!
                                    </span>
                                    <div style={{ height: 20 }} />
                                    <div className='flex items-start gap-3'>

                                        <div
                                            // src='https://avatars.githubusercontent.com/u/90733116?v=4'
                                            style={{
                                                width: 50,
                                                height: 50,
                                                backgroundColor: "#000",
                                                borderRadius: "50%",
                                            }}

                                        />
                                        <div className="">
                                            <div style={{ height: 5 }} />


                                            <div className={style.seller_deatils}>

                                                <span className={style.seller_name}>Seller's Response</span>
                                                <div style={{ height: 10 }} />

                                                <span className={style.review_des}>
                                                    Thank you so much 😊
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ height: 10 }} />

                        <div style={{ width: "60%", backgroundColor: "#DADBDD", height: 1 }} />

                        <div style={{ height: 10 }} />
                        <span className={style.see_more}>
                            + See More
                        </span>

                    </div>


                    <div style={{ height: 200 }} />

                </div>

            )

            }
        </div>
    )
}
