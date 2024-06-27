"use client"
import Image from 'next/image'
import React from 'react'
import style from './category_card.module.css'
function Category_card({data}:any) {
  return (
    <div className={style.card}>
    <Image src={'/category_image.png'}
        width={215}
        height={223}
        objectFit="cover" alt={'Category'} />
    <div className={style.textOverlay}>
        <span>{data}</span>
    </div>
</div>
  )
}

export default Category_card