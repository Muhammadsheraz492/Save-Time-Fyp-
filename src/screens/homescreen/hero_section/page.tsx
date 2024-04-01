import React from 'react'
import style from './hero.module.css'
import Image from 'next/image'
import Typography from '@mui/material/Typography';

export default function Hero_Section() {
  return (
    <div className={style.hero_section}>
      <div className={style.text_conatiner}>
        <div className={style.status}>
          <text className={style.status_text}>FOR HIRING</text>
          <label className={style.switch}>
            <input type='checkbox' />
            <span className={style.switch_round}></span>

          </label>
          <Typography sx={{
            fontSize: {
              xs: "16px",
              md: "18px",
              lg: "20px",

            },
            color: {
              xs: "#131517",
              md: "#131517",
              lg: "#131517"
            }
          }}>FOR FREELANCING</Typography>
        </div>
        <text className={style.tagline}>Freelance Jobs <br /> and Talents at <br /> Your FingerTips</text>
        <text className={style.des}>Connect with Top Freelancers and <br /> Clients on Our Platform! Find your<br /> perfect match for your next project.</text>
        <div className={style.users}>
          <Image
            alt=''
            src={'/Hero_Section_users.png'}

            height={50}
            width={50}
          />
          <Image
            alt=''
            className={style.user_img}
            src={'/Hero_Section_users.png'}
            height={50}
            width={50}
          />
          <Image
            alt=''
            className={style.user_img}
            src={'/Hero_Section_users.png'}
            height={50}
            width={50}
          />
        </div>
        <div className={style.projects}>
          <text style={{ color: "#131517" }}>Over <span style={{ color: "#0146B1" }}>12800+</span> freelancers <br /> to complete your<br /> projects</text>

        </div>
      </div>
      <div className={style.img_container}>
        <Image
          src={'/Hero_section.png'}
          width={700}
          height={700}
          alt={'Save Time'}
        />
      </div>
    </div>
  )
}
