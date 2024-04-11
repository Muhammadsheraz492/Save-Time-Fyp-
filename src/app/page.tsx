import DisCover from '@/homepage/Discover/page'
import Footer from '@/homepage/Footer/page'
import Top_talent from '@/homepage/Talents/top_talent'
import Catgory from '@/homepage/category/catgory'
import Some_Doubts from '@/homepage/doubts/page'
import HomeScreen from '@/homepage/homescreen/page'
import Navbar from '@/homepage/navbar/page'
import Popular from '@/homepage/popular/page'
import Search from '@/homepage/search/page'
import Trending_Seller from '@/homepage/trending/page'
import React from 'react'

export default function page() {
  return (
    <div className="main_container">

      <div className="wrapper">
        <Navbar show={false} />
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
          <Footer  />
        </div>
      </div>
    </div>
  )
}
