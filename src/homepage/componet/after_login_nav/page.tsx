"use client";
import React, { useState } from 'react';
import style from './user.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import Image from 'next/image';

export default function After_login_NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
    };

    return (
        <div className={style.container}>
            <div className='flex items-center justify-center gap-36'>
                <span style={{ color: "#fff", fontSize: 20 }}>Save Time</span>
                <form onSubmit={handleSubmit}>
                    <div className={`relative ${style.mainbox}`}>
                        <input
                            type="text"
                            placeholder="Search for Freelancers or Services"
                            className={`border border-gray-300 rounded-lg py-2 px-3 ${style.searchInput}`}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer">
                            <div className={style.searchIcon}>
                                <FontAwesomeIcon icon={faSearch} size='lg' className="text-white cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className={style.links}>
                <IoIosNotificationsOutline size={35} color='#fff' />
                <FaRegHeart size={35} color='#fff' />
                <BiMessage size={35} color='#fff' />
                <button className={style.signup}>Order</button>
                <div className="flex items-center">
                    <div className="relative">
                        <div className={style.userIcon} onClick={handleProfileClick} />
                        <div className={style.onlineIndicator}></div>
                        {isMenuOpen && (
                            <div className={style.subMenuWrap}>

                                <div className={style.subMenu}>
                                    <span className={style.menuItem}>Profile</span>
                                    <span className={style.menuItem}>Post a Project</span>
                                    <span className={style.menuItem}>Become a Seller</span>
                                    <span className={style.menuItem}>Settings</span>
                                    <span className={style.menuItem}>Logout</span>
                                </div>
                                <div className={style.nook}>
                                    <Image
                                        src={"/Polygon.svg"}
                                        alt='Delivery Time'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
