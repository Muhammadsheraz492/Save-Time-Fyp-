"use client";
import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React from "react";
import style from "./earning.module.css";

import Tab from "@/homepage/componet/tabs/page";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";

function Page() {
  return (
    <div>
      <After_login_NavBar />
      <div
        style={{
          height: 20,
        }}
      />
      <Tab />
      <div
        style={{
          height: 20,
        }}
      />
      <div className={style.container}>
        <div className={style.earingcontainer}>
          <div style={{ height: 10 }} />
          <div className={style.label}>
            <span className={style.title}>Earning</span>
            <span className={style.learn}>Learn more about this page</span>
          </div>
          <div style={{ height: 40 }} />
          <div className={style.cards}>
            <div className={style.card}>
              <span className={style.card_title}>Available funds</span>
              <div style={{ height: 10 }} />
              <div className={style.box}>
                <div className={style.box_label}>
                  <span className={style.box_title}>
                    Balance available for use
                  </span>
                  <FaInfoCircle />
                </div>
                <div style={{ height: 40 }} />
                <span className={style.earning_count}>$0.00</span>
                <div style={{ height: 40 }} />

                <div className={style.withdraw_button}>
                  <span className={style.withdraw_button_title}>
                    Withdraw balance
                  </span>
                </div>
                <div style={{ height: 20 }} />

                <span className={style.manage}>Manage payout methods</span>
              </div>
            </div>
            <div className={style.card}>
              <span className={style.card_title}>Future payments</span>
              <div style={{ height: 10 }} />
              <div className={style.box}>
                <div className={style.box_label}>
                  <span className={style.box_title}>
                    Payments being cleared
                  </span>
                  <FaInfoCircle />
                </div>
                <div style={{ height: 40 }} />
                <span className={style.earning_count}>$0.00</span>
                <div style={{ height: 40 }} />
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#62646A",
                    height: 2,
                    borderRadius: 20,
                  }}
                />

                <div style={{ height: 20 }} />
                <div className={style.box_label}>
                  <span className={style.box_title}>
                    Payments for active orders
                  </span>
                  <FaInfoCircle />
                </div>
                <div />
                <div style={{ height: 10 }} />

                <span className={style.earning_count}>$0.00</span>
                <div style={{ height: 10 }} />

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
