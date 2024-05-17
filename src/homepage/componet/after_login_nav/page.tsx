"use client"
import React from 'react'
import style from './user.module.css'
import Link from 'next/link'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { faUser } from '@fortawesome/free-solid-svg-icons';
type After_login_NavBarProps = {
    show: boolean;
    onpress_login: any,
};
export default function After_login_NavBar() {


    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevents the default form submission behavior
        // Call your function here
        // alert("Hello")
        // window.location.href = "/search"
    };

    return (
        <div className={style.container}>
            <div className='flex items-center justify-center gap-36'>

                 <text
                 style={{color:"#fff",fontSize:20}}
                 >Save Time</text>
             
                    <form onSubmit={handleSubmit}>

                        <form onSubmit={handleSubmit}>
                            <div className={`relative ${style.mainbox}`}>
                                <input
                                    type="text"
                                    placeholder="Search for Freelancers or Services"
                                    className={`border border-gray-300 rounded-lg py-2 px-3 ${style.searchInput}`} // Add necessary input styles
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer ">
                                    <div className="flex items-center justify-center w-16 h-full rounded-r-lg cursor-pointer"
                                        style={{
                                            backgroundColor: "#005A54",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faSearch} size='lg' className="text-white cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </form>
               
            </div>
            <div className={style.links}>
                <IoIosNotificationsOutline size={35} color='#fff' />
                <FaRegHeart size={35} color='#fff' />
                <BiMessage size={35} color='#fff' />
                <button  className={style.signup}>Order</button>
                <div className="flex items-center">
                    <div className="relative">
                        {/* User icon */}
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                backgroundColor: "#000",
                                borderRadius: 50,
                            }}

                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border border-white rounded-full"></div>
                    </div>
                </div>
                {/* <Link href={'/'} className={style.link}>For Freelancer</Link> */}
                {/* <Link href={'/'} className={style.link}>For Hiring</Link>
                <Link href={'/'} className={style.link}>Why Save Time</Link>
                <button onClick={onpress_login} className={style.link}>Login</button>
                */}
            </div>
        </div>
    )



}
// "use client"
// import React from 'react'
// import style from './After_login_NavBar.module.css'
// import Link from 'next/link'
// export const After_login_NavBar: React.FC<{ show: Boolean }> = ({ show }) => {
//     return (
//         <div className={style.container}>
//             <text>logo</text>
//             {show ? (
//                 <input
//                     type="text"
//                     placeholder="Please Search the Skills..."
//                     className={style.searchInput}
//                 />
//             ):null}
//             <div className={style.links}>
//                 <Link href={'/'} className={style.link}>For Freelancer</Link>
//                 <Link href={'/'} className={style.link}>For Hiring</Link>
//                 <Link href={'/'} className={style.link}>Why Save Time</Link>
//                 <Link href={'/'} className={style.link}>Login</Link>
//                 <Link href={'/'} className={style.signup}>Sign up</Link>
//             </div>
//         </div>
//     )
// }
