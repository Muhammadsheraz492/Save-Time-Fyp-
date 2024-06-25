"use client"
import React, { useState } from 'react'
import style from './navbar.module.css'
import Link from 'next/link'
import Dialog from '@/homepage/componet/dialog'
import Login_dialog from '@/homepage/componet/login/login_dialog'
import Signup_dialog from '@/homepage/componet/signup/page'
type NavbarProps = {
    show: boolean;
    onpress_login: any,
};
export default function Navbar({ show, onpress_login }: NavbarProps) {
    const [showlogin, setshowlogin] = useState(false)
    const [click_login, Setclick_login] = useState(false)
    const [click_signup, Setclick_signup] = useState(false)

    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevents the default form submission behavior
        // Call your function here
        // alert("Hello")
        window.location.href = "/search"
    };

    return (
        <div className={style.container}>
                {showlogin && (
        <Dialog onpress={() => {
          setshowlogin(false)
        }}
          login_onpress={() => {
            setshowlogin(false)
            Setclick_login(true)
          }}
          signup_onpress={()=>{
            setshowlogin(false)
            Setclick_signup(true)

          }}

        />
      )
      }
      {click_login && (
        <Login_dialog onpress={() => {
          Setclick_login(false)
        }}
          back_press={() => {
            Setclick_login(false)
            setshowlogin(true)

          }}
        />
      )
      }
      {
        click_signup&&(
          <Signup_dialog 
          
          onpress={()=>{
            Setclick_signup(false)
            setshowlogin(true)

          }}
          />
        )
      }
            <div className='flex items-center justify-center gap-20'>

                <text>logo</text>
                {show ? (
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Search for Freelancers or Services"
                            className={style.searchInput}

                        />
                    </form>
                ) : null}
            </div>
            <div className={style.links}>
                <Link href={'/'} className={style.link}>For Freelancer</Link>
                <Link href={'/'} className={style.link}>For Hiring</Link>
                <Link href={'/'} className={style.link}>Why Save Time</Link>
                <button onClick={()=>{
          setshowlogin(true)

                }} className={style.link}>Login</button>
                <button onClick={()=>{
          setshowlogin(true)

                }}  className={style.signup}>Sign up</button>
            </div>
        </div>
    )



}
// "use client"
// import React from 'react'
// import style from './navbar.module.css'
// import Link from 'next/link'
// export const Navbar: React.FC<{ show: Boolean }> = ({ show }) => {
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
