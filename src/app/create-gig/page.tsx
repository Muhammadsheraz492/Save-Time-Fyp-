"use client";
import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React, { useState } from "react";
import style from "./create_gig.module.css";
import { FaChevronRight } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
const Page: React.FC = () => {
  const [overview, setOverview] = useState<string[]>(["Overview"]);
  const [current_index, setcurrent_index] = useState(0);
  const addItem = (text: string) => {
    const newOverview = [...overview, text];
    setOverview(newOverview);
  };

  const data: string[] = [
    "Overview",
    "Pricing",
    "Description & FAQ",
    "Requirements",
    "Gallery",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <After_login_NavBar />
      </div>
      <div className={style.container}>
        <div className={style.rightside}>
          <div>
            <div className={style.stepname}>
              {data.map((e: string, index: number) => (
                <>
                  <div className={style.stepname}>
                    <div
                      className={style.circle}
                      style={{
                        backgroundColor: overview.includes(e)
                          ? "#00A79D"
                          : "#C5C6C9",
                      }}
                    >
                      <span className={style.number}>{index}</span>
                    </div>
                    <text
                      style={{
                        color: overview.includes(e) ? "#00A79D" : "#C5C6C9",
                      }}
                    >
                      {e}
                    </text>
                    {index !== data.length - 1 && <FaChevronRight />}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={style.savebtn}>
            <text className={style.btn_text}>Save</text>
          </div>
        </div>
      </div>
      {current_index == 0 && (
        <>
          <div style={{ height: 10 }} />

          <div className={style.category}>
            <div className={style.gig_title}>
              <div className={style.left_side}>
                <span className={style.gig_title_content}>Gig title</span>
                <span className={style.gig_title_content_desc}>
                  As your Gig storefront, your title is the most important place
                  to include keywords that buyers would likely use to search for
                  a service like yours.
                </span>
              </div>
              <div className={style.right_side}>
                <div className={style.input_box}>
                  <textarea
                    placeholder="I will develop"
                    style={{
                      resize: "none",
                      width: "100%",
                      height: "100%",
                      border: "none",
                      outline: "none",
                      padding: "10px",
                      fontSize: "16px",
                      overflow: "hidden",
                    }}
                    rows={4}
                  />
                </div>
                <div style={{ height: 10 }} />
                <span className={style.max}>0 / 80 max</span>
              </div>
            </div>
            <div style={{ height: 20 }} />

            <div className={style.gig_title}>
              <div className={style.left_side}>
                <span className={style.gig_title_content}>Category</span>
                <span className={style.gig_title_content_desc}>
                  Choose the category and sub-category most suitable for your
                  Gig.
                </span>
              </div>
              <div className={style.right_side}>
                <div className={style.maincategory}>
                  <select
                    // value={selectedOption}
                    // onChange={handleSelectChange}
                    // className={style.maincategory}
                    style={{
                      marginTop: "10px",
                      width: "90%",
                      padding: "10px",
                      fontSize: "16px",
                      border: "2px solid #CCCCCC",
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      outline: "none",
                    }}
                  >
                    <option value="">Select an Category</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>
                  <select
                    // value={selectedOption}
                    // onChange={handleSelectChange}
                    // className={style.maincategory}
                    style={{
                      marginTop: "10px",
                      width: "90%",
                      padding: "10px",
                      fontSize: "16px",
                      border: "2px solid #CCCCCC",

                      backgroundColor: "#fff",
                      borderRadius: 10,
                      outline: "none",
                    }}
                  >
                    <option value="">Select an Sub Category</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ height: 40 }} />

            <div className={style.gig_title}>
              <div className={style.left_side}>
                <span className={style.gig_title_content}>Service type</span>
                <span className={style.gig_title_content_desc}>
                  Choose the your most suitable Service type for your Gig.
                </span>
              </div>
              <div className={style.right_side}>
                <div className={style.maincategory}>
                  <select
                    // value={selectedOption}
                    // onChange={handleSelectChange}
                    // className={style.maincategory}
                    style={{
                      marginTop: "10px",
                      width: "50%",
                      padding: "10px",
                      fontSize: "16px",
                      border: "2px solid #CCCCCC",
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      outline: "none",
                    }}
                  >
                    <option value="">Select an Service Type</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ height: 40 }} />

            <div className={style.gig_title}>
              <div className={style.left_side}>
                <span className={style.gig_title_content}>Search tags</span>
                <span className={style.gig_title_content_desc}>
                  Tag your Gig with buzz words that are relevant to the services
                  you offer. Use all 5 tags to get found.
                </span>
              </div>
              <div className={style.right_side}>
                <span className={style.hastags}>Positive keywords</span>

                <span className={style.gig_title_content_desc}>
                  Enter search terms you feel your buyers will use when looking
                  for your service.
                </span>
                <div style={{ height: 10 }} />
                <div className={style.hashtag_box} />
                <div style={{ height: 10 }} />

                <div
                  style={{
                    color: "#95979D",
                  }}
                >
                  5 tags maximum. Use letters and numbers only.
                </div>
              </div>
            </div>
            <div style={{ height: 40 }} />
            <div className={style.note}>
              <FaInfoCircle color="#FC832B" />
              <span
                style={{
                  color: "#FC832B",
                }}
              >
                Please note:
              </span>
              <span
                style={{
                  color: "#62646A",
                }}
              >
                Some categories require that sellers verify their skills.
              </span>
            </div>
            <div style={{ height: 40 }} />
          </div>
          <div style={{ height: 40 }} />
          <div className={style.showrightside}>
            <div
              className={style.savebtncontinue}
              onClick={() => {
                addItem("Pricing");
                setcurrent_index(1);
              }}
            >
              <text className={style.btn_text}>Save & Continue</text>
            </div>
          </div>
          <div style={{ height: 100 }} />
        </>
      )}
      {current_index == 1 && (
        <>
          <div style={{ height: 20 }} />

          <div className={style.category}>
            <div className={style.price_gig_title}>
              <div className={style.left_side}>
                <span className={style.price_title_content}>Pricing</span>
              </div>
              <div className={style.right_side}>
                <div className={style.price_right_side}>
                  <div className={style.price_box}>
                    <text className={style.packageName}>BASIC</text>
                  </div>
                  <div className={style.price_box}>
                    <text className={style.packageName}>STANDARD</text>
                  </div>
                  <div className={style.price_box}>
                    <text className={style.packageName}>PREMIUM</text>
                  </div>
                </div>
                <div
                  style={{
                    height: 10,
                  }}
                />
                <div className={style.price_right_side}>
                  <div className={style.price_packageName}>
                    <textarea
                      placeholder="Silver"
                      style={{
                        resize: "none",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        outline: "none",
                        padding: "10px",
                        fontSize: "16px",
                        overflow: "hidden",
                      }}
                      maxLength={10}
                      rows={4}
                    />
                    {/* <text className={style.packageName}>BASIC</text> */}
                  </div>
                  <div className={style.price_packageName}>
                    <textarea
                      placeholder="Gold"
                      style={{
                        resize: "none",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        outline: "none",
                        padding: "10px",
                        fontSize: "16px",
                        overflow: "hidden",
                      }}
                      maxLength={10}
                      rows={4}
                    />
                  </div>
                  <div className={style.price_packageName}>
                    <textarea
                      placeholder="Platinum"
                      style={{
                        resize: "none",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        outline: "none",
                        padding: "10px",
                        fontSize: "16px",
                        overflow: "hidden",
                      }}
                      maxLength={10}
                      rows={4}
                    />
                  </div>
                </div>
                <div
                  style={{
                    height: 10,
                  }}
                />
                <div className={style.price_right_side}>
                  <div className={style.packageName_desc}>
                    <textarea
                      placeholder="2-3 professional front-end screen with navigation (Only Front End UI's)"
                      style={{
                        resize: "none",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        outline: "none",
                        padding: "10px",
                        fontSize: "16px",
                        overflow: "hidden",
                      }}
                      maxLength={100}
                      rows={4}
                    />
                    {/* <text className={style.packageName}>BASIC</text> */}
                  </div>
                  <div className={style.packageName_desc}>
                    <textarea
                      placeholder="2-3 professional front-end screen with navigation (Only Front End UI's)"
                      style={{
                        resize: "none",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        outline: "none",
                        padding: "10px",
                        fontSize: "16px",
                        overflow: "hidden",
                      }}
                      maxLength={100}
                      rows={4}
                    />
                  </div>
                  <div className={style.packageName_desc}>
                    <textarea
                      placeholder="2-3 professional front-end screen with navigation (Only Front End UI's)"
                      style={{
                        resize: "none",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        outline: "none",
                        padding: "10px",
                        fontSize: "16px",
                        overflow: "hidden",
                      }}
                      maxLength={100}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 10 }} />

            <div className={style.check_gig_item}>
              <div className={style.left_side}>
                <span className={style.gig_title_content}>
                  Functional Android app
                </span>
              </div>
              <div className={style.right_side}>
                <div className={style.price_right_side}>
                  <div className={style.price_box}>
                    <input
                    className={style.checkbox}
                      type="checkbox"
                      style={{
                        outline:'none'
                      }}
                      // checked={isChecked} // Set checked state
                      // onChange={handleChange}
                    />
                  </div>
                  <div className={style.price_box}>
                  <input
                    className={style.checkbox}
                      type="checkbox"
                      style={{
                        outline:'none'
                      }}
                      // checked={isChecked} // Set checked state
                      // onChange={handleChange}
                    />
                  </div>
                  <div className={style.price_box}>
                  <input
                    className={style.checkbox}
                      type="checkbox"
                      style={{
                        outline:'none'
                      }}
                      // checked={isChecked} // Set checked state
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 40 }} />
          <div className={style.showrightside}>
            <div
              className={style.savebtncontinue}
              onClick={() => {
                addItem("Pricing");
                setcurrent_index(1);
              }}
            >
              <text className={style.btn_text}>Save & Continue</text>
            </div>
          </div>
          <div style={{ height: 100 }} />
        </>
      )}
    </div>
  );
};

export default Page;
