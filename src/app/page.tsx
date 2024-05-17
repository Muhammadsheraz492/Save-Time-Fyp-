"use client"
import DisCover from '@/homepage/Discover/page'
import Footer from '@/homepage/Footer/page'
import Top_talent from '@/homepage/Talents/top_talent'
import Catgory from '@/homepage/category/catgory'
import Dialog from '@/homepage/componet/dialog'
import Login_dialog from '@/homepage/componet/login/login_dialog'
import Signup_dialog from '@/homepage/componet/signup/page'
import Some_Doubts from '@/homepage/doubts/page'
import HomeScreen from '@/homepage/homescreen/page'
import Navbar from '@/homepage/navbar/page'
import Popular from '@/homepage/popular/page'
import Search from '@/homepage/search/page'
import Trending_Seller from '@/homepage/trending/page'
import React, { useState } from 'react'

export default function page() {
  const [showlogin, setshowlogin] = useState(false)
  const [click_login, Setclick_login] = useState(false)
  const [click_signup, Setclick_signup] = useState(false)
  return (
    <div className="main_container">
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
      <div className="wrapper">
        <Navbar show={false} onpress_login={() => {
          setshowlogin(true)

        }} />
        <HomeScreen />
      </div>
      <div className='search'>
        <div className="wrapper">
          <Search />
        </div>
      </div>
      <div className='search'>
        <div className="wrapper">
          <Popular />
          <Top_talent />
          <Catgory />
        </div>
      </div>
      <div className='search2'>

        <div className="wrapper">

          <DisCover />
        </div>
      </div>
      <div className='search'>
        <div className="wrapper">
          <Trending_Seller />
        </div>
      </div>
      <div className='search3'>
        <div className="wrapper">
          <Some_Doubts />
        </div>
      </div>


      <div className='footer'>
        <div className="wrapper">
          <Footer />
        </div>
      </div>
    </div>
  )
}
