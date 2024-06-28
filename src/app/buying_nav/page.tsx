import Navbar from '@/homepage/navbar/page'
import React from 'react'
import style from './buying_nav.module.css'
import Gig_card from '@/homepage/componet/gig_card'
import Footer from '@/homepage/footer/page'
function Force_buying_nav() {
  let data=["Graphics & Design","Digital Marketing","Writing & Translation","Video & Animation","Music & Audio","Programming & Tech"]
  let gigs=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  return (
    <div className={style.main_container}>
      <Navbar show={true} onpress_login={undefined} /> 
  
      <div className={style.main_service_container}>

      <div className={style.services}>
       {data.map((e)=>(
        // eslint-disable-next-line react/jsx-key
        <a href='/test'>{e}</a>
       ))

       }
      </div>
      </div>
      <div className={style.gigs}>

      {gigs.map(()=>(
        // eslint-disable-next-line react/jsx-key
        <Gig_card />
        ))}
        </div>
      <Footer />
    </div>
  )
}

export default Force_buying_nav