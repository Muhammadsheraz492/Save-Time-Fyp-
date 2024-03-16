import DisCover from '@/screens/Discover/page'
import Top_talent from '@/screens/Talents/top_talent'
import Catgory from '@/screens/category/catgory'
import HomeScreen from '@/screens/homescreen/page'
import Navbar from '@/screens/navbar/page'
import Popular from '@/screens/popular/page'
import Search from '@/screens/search/page'
import Trending_Seller from '@/screens/trending/page'
import React from 'react'

export default function page() {
  return (
    <div className="main_container">

      <div className="wrapper">
        <Navbar />
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
    </div>
  )
}
``