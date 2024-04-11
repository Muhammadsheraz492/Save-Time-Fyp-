"use client"

import Footer from '@/homepage/Footer/page'
import Navbar from '@/homepage/navbar/page'
import React, { useEffect, useState } from 'react'
import style from './buying_nav.module.css'
import Gig_card from '@/homepage/componet/gig_card'
import Dialog from '@/homepage/componet/dialog'
import Login_dialog from '@/homepage/componet/login/login_dialog'

function Force_buying_nav() {
  let data = ["Graphics & Design", "Digital Marketing", "Writing & Translation", "Video & Animation", "Music & Audio", "Programming & Tech"]
  let gigs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  const [showlogin, setshowlogin] = useState(false)
  const [click_login, Setclick_login] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      // alert("Hello")
      setshowlogin(true)
    }, 1000);
  }, [])
  return (
    <div className={style.main_container}>
      <Navbar show={true} onpress_login={()=>{
        Setclick_login(true )
      }} />
      <div style={{ height: 20 }} />

      <div className={style.gigs}>

        {gigs.map(() => (
          <Gig_card />
        ))}
      </div>
      {showlogin && (
        <Dialog onpress={() => {
          setshowlogin(false)
        }} />
      )

      }
      {click_login&&(
        <Login_dialog onpress={()=>{
          Setclick_login(false )
        }}/>
      )

      }
      <Footer />

    </div>
  )
}

export default Force_buying_nav