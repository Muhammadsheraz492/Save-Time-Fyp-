import React from 'react'
import style from './tabs.module.css'
let data = [
    {"name": "Dashboard","nav":"seller_dashboard"},
     {"name":"Earning","nav":"earning"},
     {"name":"Growth & Marketing","nav":"gigs"},
    {"name": "Analytics"},
     // "Music & Audio",
     // "Programming & Tech",
   ];
function page() {
  return (
    <div className={style.main_service_container}>
    <div className={style.services}>
      {data.map((e) => (
        // eslint-disable-next-line react/jsx-key
        <a href={`/${e.nav}`}>{e.name}</a>

      ))}
    </div>
  </div>
  )
}

export default page