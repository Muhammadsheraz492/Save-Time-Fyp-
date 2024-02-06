import HomeScreen from '@/screens/homescreen/page'
import Navbar from '@/screens/navbar/page'
import Search_Bar from '@/screens/search_section/page'
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

          <Search_Bar />
        </div>
      </div>



    </div>
  )
}
``