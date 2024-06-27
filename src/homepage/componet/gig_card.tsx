"use client";
import React from "react";
import style from "./gig_card.module.css";
import Image from "next/image";
function Gig_card({ data }: any) {
  return (
    <div className={style.card}>
      <div className={style.user}>
        <div className={style.user_img}>
          <Image
            src={"/card_img.png"}
            alt="View All Icon"
            width={60}
            height={60}
          />
        </div>
        <div className={style.user_details}>
          <div className={style.user_leavel}>
            <span>{data?.level ? data?.level : "level"}</span>
          </div>
          <span>{data?.name ? data?.name : "Thato Maselela"}</span>
          <div className={style.star_card}>
            <Image src={"/star.svg"} alt="stars" width={25} height={25} />
            <span style={{ color: "#FFD700", fontWeight: "bold" }}>5.0</span>
            <span style={{ color: "#B5B6BA" }}>-</span>
            <span style={{ color: "#B5B6BA" }}>570</span>
          </div>
        </div>
      </div>
      <div className={style.title_card}>
        <a
        onClick={()=>{
          window.location.href="/check_details"

        }}
        >
          <span className={style.title}>
            I will design UI UX for mobile app with figma for ios or android
          </span>
        </a>
      </div>
      <div className={style.price_card}>
        <span className={style.start_from}>Starting from</span>
        <div className={style.price_box}>
          <span>500$</span>
        </div>
      </div>
      <div className={style.gigimage}>
        <Image
          src={"/card_img.png"}
          alt="View All Icon"
          width={365}
          height={275}
        />
      </div>
      <div className={style.get_in_touch}>
        <div className={style.Icon}>
          <Image
            src={"/heart.svg"}
            alt="View All Icon"
            width={17}
            height={17}
          />
        </div>
        <div className={style.button}>
          <Image
            src={"/get_in_touch.svg"}
            alt="View All Icon"
            width={30}
            height={30}
          />

          <span>Get in Touch</span>
        </div>
      </div>
    </div>
  );
}

export default Gig_card;
