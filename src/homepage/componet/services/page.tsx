import React from 'react'
import style from './services.module.css'
function All_services() {
  let data=["Graphics & Design","Digital Marketing","Writing & Translation","Video & Animation","Music & Audio","Programming & Tech",]

  return (
    <div className={style.main_service_container}>

    <div className={style.services}>
     {data.map((e)=>(
      <a href='/test'>{e}</a>
     ))

     }
    </div>
    </div>
  )
}

export default All_services