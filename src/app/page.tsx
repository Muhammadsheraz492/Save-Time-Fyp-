import HomeScreen from '@/screens/homescreen/page'
import Navbar from '@/screens/navbar/page'
import React from 'react'

export default function page() {
  return (
    <div className="main_container">

      <div className="wrapper">
        <Navbar />
        <HomeScreen />
      </div>
    </div>
  )
}
``