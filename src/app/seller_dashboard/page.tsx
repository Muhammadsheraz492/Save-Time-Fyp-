"use client"
import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React from "react";
import style from "./dashboard.module.css";
import Tab from "@/homepage/componet/tabs/page"
function getTimeElapsed(startDate) {
  const currentTime = new Date();
  const difference = currentTime - new Date(startDate);

  if (difference < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLate: false };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isLate: true };
}
const response = [1, 2, 3];
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
      {/* 0 */}

      <div className={style.maincontainer}>
        <div className={style.dashboard_container}>
          <div className={style.userpanel}>
            <div className={style.left_side}>
              <div className={style.avatar}></div>
              <span className={style.username}>Muhammad Shiraz</span>
            </div>
            <div className={style.right_side}>
              <div className={style.input_box}>
                <div className={style.active}>
                  <span
                    className={style.active_order_text}
                    style={{
                      color: "#222325",
                      fontWeight: "bold",
                    }}
                  >
                    Active orders -
                  </span>
                  <span
                    style={{
                      color: "#95979D",
                    }}
                  >
                    0 ($0){" "}
                  </span>
                </div>
                <div className={style.savebtncontinue}>
                  <select className={style.dropdown}>
                    <option value="option1">Active orders (0)</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: 20,
            }}
          />
          <div className={style.userpanel}>
          <div className={style.text_left}>
            <div className={style.left_side_response}>
              
              <div className={style.left_row}>
                <span className={style.username}>Inbox response rate</span>
                <div className={style.row}>
                  <div className={style.dot}>
                    {response.map((e) => (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        style={{
                          width: 18,
                          height: 10,
                          backgroundColor: "#00A79D",
                          borderRadius: 20,
                        }}
                      />
                    ))}
                  </div>
                  <span>100%</span>
                </div>
              </div>
              <div className={style.left_row}>
                <span className={style.username}>Inbox response time</span>
                <div className={style.row}>
                  <span className={style.NA}>N/A</span>
                </div>
              </div>
              <div className={style.left_row}>
                <span className={style.username}>Order response rate</span>
                <div className={style.row}>
                  <div className={style.dot}>
                    {response.map((e) => (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        style={{
                          width: 18,
                          height: 10,
                          backgroundColor: "#00A79D",
                          borderRadius: 20,
                        }}
                      />
                    ))}
                  </div>
                  <span>100%</span>
                </div>
              </div>
              <div className={style.left_row}>
                <span className={style.username}>Delivered on time</span>
                <div className={style.row}>
                  <div className={style.dot}>
                    {response.map((e) => (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        style={{
                          width: 18,
                          height: 10,
                          backgroundColor: "#00A79D",
                          borderRadius: 20,
                        }}
                      />
                    ))}
                  </div>
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className={style.left_side_response}>
              
              <div className={style.left_row}>
                <span className={style.username}>Earned in March</span>
                <div className={style.row}>
                  <span className={style.NA}>$0</span>
                </div>
              </div>
            </div>
            <div className={style.left_side_response}>
              <div className={style.left_row}>
                <span className={style.username}>Inbox</span>
                <div className={style.row}>
                  <span className={style.NA}>View All</span>
                </div>
              </div>
            </div>
            </div>
            <div className={style.right_side}>
              <Order time_data={'2024-06-25T12:00:00'} />
              <div
              style={{height:10}}
              />
              <Order time_data={'2024-07-25T12:00:00'} />
              <div
              style={{height:10}}
              />
              <Order time_datame={'2025-07-25T12:00:00'} />
            </div>
          </div>
          <div
            style={{
              height: 20,
            }}
          />
          <div className={style.userpanel}>
           
          </div>

          {/* <div style={{ height: 40 }} /> */}
          <div
            style={{
              height: 20,
            }}
          />
          <div className={style.userpanel}>
           
          </div>

          <div style={{ height: 40 }} />
        </div>
      </div>
      {/* 1 */}
    </div>
  );
}

export default Page;
const Order = ({ time_data }:any) => {

// alert(time_data);

  
  return(
  <div
                style={{
                  backgroundColor: 
                  getTimeElapsed(time_data).isLate? "red"
                    : "#00A79D",
                  display: "flex",
                  justifyContent: "flex-end",
                  borderRadius: 10,
                }}
              >
                <div
                  className={style.ordermask}
                  style={{ backgroundColor: "white" }}
                >
                  <div className={style.userdetails}>
                    <Image
                      src={"/images.png"}
                      //  layout='fill'
                      alt="Delivery Time"
                      objectFit="cover"
                      width={100}
                      height={100}
                      style={{ borderRadius: 10 }}
                    />
                    <div className={style.avatar}></div>
                    <span>Lorem Iosum</span>
                  </div>
                  {/* <div className={style.middle}> */}
                  <div className={style.column}>
                    <strong>Price</strong>
                    <span>$130</span>
                  </div>
                  <div className={style.column}>
                    <strong>Delivery Time</strong>
                    <span>{getTimeElapsed(time_data).days} days late</span>
                  </div>
                  <div className={style.column}>
                    <strong>Status</strong>
                    <span>LATE</span>
                  </div>
                  {/* </div> */}
                  <div className={style.savebtn}>
                    <span>View</span>
                  </div>
                </div>
              </div>
  )
}