import Image from 'next/image'
import React from 'react'
import style from './seller_component.module.css'
function Seller_component({data}:any) {
  return (
    <div className={style.user_card}>
    <Image
        src={"/seller.svg"}
        alt='seller image'
        width={383}
        height={328}
    />
    <div className={style.user_details}>
        <div className={style.userName}>
            <span className={style.Name}>{data.name}</span>
            <span className={style.skill}>{data.profession}</span>
        </div>
        <Image
        src={"/right.svg"}
        alt='seller image'
        width={10}
        height={10}
    />
    </div>
</div>
  )
}

export default Seller_component