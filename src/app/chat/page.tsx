import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React from "react";
import style from "./chat.module.css";
import Image from "next/image";

function Page() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <After_login_NavBar />
      <div style={{ height: 20 }} />
      <div className={style.size}>
        <div className={style.pannel}>
          <div className={style.leftside}>
            <span>Message</span>
            <div style={{ height: 10 }} />

            <div className={style.textbox}>
              <input placeholder="Search user" />
            </div>

            <div className={style.scrollContainer}>
              {data.map((e) => (
                <>
                <div className={style.card} key={e}>
                  <Image
                    alt=""
                    src={"/messager.png"}
                    style={{ borderRadius: 15 }}
                    height={50}
                    width={50}
                  />
                  <div className={style.userinfo}>
                    <div className={style.user}>
                      <span>Muhammad Sheraz</span>
                      <span>12</span>
                    </div>
                    <span>Save Time</span>
                  </div>
                </div>
            <div style={{ height: 10 }} />
            </>

              ))}
            </div>

            <div style={{ height: 10 }} />
          </div>
          <div className={style.rightside}>
            <div className={style.contact_user}>
                <div className={style.userName}>
                <Image
                    alt=""
                    src={"/messager.png"}
                    style={{ borderRadius: 15 }}
                    height={50}
                    width={50}
                  />
                  <div className={style.status}>
                  <span className={style.name}>Florencio Dorrance</span>
                  <span>online</span>
                  </div>
                </div>
                
                <div className={style.savebtn}>
                    <span>Call</span>
                  </div>

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
