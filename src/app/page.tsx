import HomeScreen from '@/screens/homescreen/page'
import Navbar from '@/screens/navbar/page'
import Popular from '@/screens/popular/page'
import Search from '@/screens/search/page'
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
        </div>
      </div>


    </div>
  )
}
``