import React from 'react'
import style from './discover.module.css'
import Image from 'next/image'
export default function DisCover() {
  let data=[1,2,3]
  return (
    <div className={style.main_container}>
      <div className={style.card}>
        <div className={style.content}>
         <div style={{height:30}} /> 

        <span className={style.tagline}>Discover Our Outstanding Features </span>
         <div style={{height:50}} /> 
          <div className={style.container}>
         {data.map((e)=>(
           <div className={style.content_card}>
           <div className={style.title}>
           <Image
           src={'/Check.svg'} alt={''}
           width={25}
           height={25}
         />
           <div className={style.content_title}>
             <span>Heading 1</span>
             <p className={style.des}>
               Lorem ipsum dolor sit amet,  interdum a suscipit et, consequat nec nibh. Lorem ipsum dolor sit amet,  interdum .
             </p>
             </div>
           </div>
         </div>
         ))}
      
          </div>

        </div>
        <div className={style.img_container}>
          <Image
            src={'/card.svg'} alt={''}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div style={{height:20}} />
    </div>
  )
}
