import React from 'react'
import style from './popular.module.css'
import Image from 'next/image'
export default function Popular() {
  return (
    <div className={style.main_container}>

      <div className={style.Popular}>
        <div className={style.popularContent}>
          <div className={style.tagline}>
            <span>Most Popular Services</span>
            <Image
              src={"/trafiic.svg"}
              alt="My SVG"
              width={30}
              height={30}
            />
          </div>
          <div className={style.viewAll} >
            <span>View All</span>
            <Image
              src={"/viewAll.svg"}
              alt="View All"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className={style.itemCard}>
        <div className={style.imageOverlay}>
      <Image
              src={"/coding.svg"}
              alt="View All"
              width={6}
              height={20}
            />
          <span>WEB <br />
            DEVELOPMENT</span>
        </div>
        <Image
          src={"/developer.png"}
          alt="My SVG"
          width={215}
          height={223}
          // layout="fill" // Ensures the Image component takes the full dimensions of its parent div
          objectFit="cover"



        />
      </div>

    </div>
  )
}
