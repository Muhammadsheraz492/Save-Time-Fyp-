"use client";
import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React, { useState } from "react";

import Tab from "@/homepage/componet/tabs/page";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";
import style from "./gig.module.css";
let data = [
  { name: "Active" },
  { name: "Pending" },
  { name: "Paused" },
  // "Music & Audio",
  // "Programming & Tech",
];
function Page() {
  const [current_index, setcurrent_index] = useState(0);
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
      <div className={style.row}>
        <div className={style.component1}>
          {data.map((e, index) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className={style.box}
              style={{
                backgroundColor: index == current_index ? "#00A79D" : "#C4C4C4",
              }}
              onClick={() => {
                setcurrent_index(index);
              }}
            >
              <button
                //    disabled
                style={{ color: "#fff", outline: "none" }}
              >
                {e.name}
              </button>
            </div>
          ))}
        </div>
        <div className={style.component2}>
          <a href="/create-gig" className={style.createGigButton}>
            Create Gig
          </a>
        </div>
      </div>
      <div
        style={{
          height: 20,
        }}
      />
      <div>
        {current_index==0&&(
          <div className={style.size}>
          <div className={style.gig}>
            <div className={style.gigmask}>
              <div className={style.gigimage}>
                <Image
                  src={"/images.png"}
                  //  layout='fill'
                  alt="Delivery Time"
                  objectFit="cover"
                  width={100}
                  height={100}
                  style={{ borderRadius: 10 }}
                />
                <span className={style.title}>
                  I will develop android and ios apps using react native expo
                </span>
              </div>
              <div className={style.column}>
                <strong>IMPRESSIONS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>CLICKS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>ORDERS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>CANCELLATIONS</strong>
                <span>130</span>
              </div>
              <div className={style.savebtn}>
                    <span>View</span>
                  </div>
           
       
              
            </div>
          </div>
        </div>
        )
        }
         {current_index==1&&(
          <div className={style.size}>
          <div className={style.gig}>
            <div className={style.gigmask}>
              <div className={style.gigimage}>
                <Image
                  src={"/images.png"}
                  //  layout='fill'
                  alt="Delivery Time"
                  objectFit="cover"
                  width={100}
                  height={100}
                  style={{ borderRadius: 10 }}
                />
                <span className={style.title}>
                  I will develop android and ios apps using react native expo
                </span>
              </div>
              <div className={style.column}>
                <strong>IMPRESSIONS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>CLICKS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>ORDERS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>CANCELLATIONS</strong>
                <span>130</span>
              </div>
              <div className={style.savebtn}>
                    <span>View</span>
                  </div>
           
       
              
            </div>
          </div>
        </div>
        )
        }
         {current_index==2&&(
          <div className={style.size}>
          <div className={style.gig}>
            <div className={style.gigmask}>
              <div className={style.gigimage}>
                <Image
                  src={"/images.png"}
                  //  layout='fill'
                  alt="Delivery Time"
                  objectFit="cover"
                  width={100}
                  height={100}
                  style={{ borderRadius: 10 }}
                />
                <span className={style.title}>
                  I will develop android and ios apps using react native expo
                </span>
              </div>
              <div className={style.column}>
                <strong>IMPRESSIONS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>CLICKS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>ORDERS</strong>
                <span>130</span>
              </div>
              <div className={style.column}>
                <strong>CANCELLATIONS</strong>
                <span>130</span>
              </div>
              <div className={style.savebtn}>
                    <span>View</span>
                  </div>
           
       
              
            </div>
          </div>
        </div>
        )
        }
      </div>
    </div>
  );
}

export default Page;
