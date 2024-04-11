import React from 'react'
import style from './text_component.module.css'
import Image from 'next/image'
const Text_component:React.FC<{title:any,button:Boolean,second:string,onpress:any}>=({title,button,second,onpress})=> {
  return (
    <div className={style.Popular}>
    <div className={style.popularContent}>
      <div className={style.tagline}>
      <span>{title}</span>
      {second&&(<span style={{color:"#00A79D"}}>{second}</span>)}
        {/* <Image src={"/trafiic.svg"} alt="Traffic Icon" width={30} height={30} /> */}
      </div>
      {button&&(
        <div className={style.viewAll}
        
        onClick={onpress}
        >
        <span>View All</span>
        <Image src={"/viewAll.svg"} alt="View All Icon" width={30} height={30} />
      </div>
      )}
    </div>
  </div>
  )
}

export default Text_component