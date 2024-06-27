"use client";
import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React, { useState } from "react";
import style from "./create_gig.module.css";
import { FaChevronRight } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";
const Page: React.FC = () => {
  const [overview, setOverview] = useState<string[]>(["Overview"]);
  const [aiselected_images,setaiselected_images]=useState<number[]>([])
  const [current_index, setcurrent_index] = useState(0);
  const [aiImageslist,setaiImageslist]=useState([1,2,3,4,5,6,7,8,9])
  const [openmodel,setopenmodel]=useState(false)
  const [desc, setdesc] = useState("");
  const addItem = (text: string) => {
    const newOverview = [...overview, text];
    setOverview(newOverview);
  };
  const addimage=(index:number)=>{
    if (aiselected_images.includes(index)) {
      // // Image is already selected, remove it
      // const newSelection = aiselected_images.filter((selected) => selected !== index);
      // setaiselected_images(newSelection);
    } else {
      // Image is not selected, add it
      if (aiselected_images.length < 3) {
        setaiselected_images([...aiselected_images, index]);
      } else {
        // Replace the oldest selection (the first one)
        const newSelection = [...aiselected_images];
        newSelection.shift(); // Remove the oldest selection
        newSelection.push(index); // Add the new selection
        setaiselected_images(newSelection);
      }
    }
   
  }
  const data: string[] = [
    "Overview",
    "Pricing",
    "Description & FAQ",
    // "Requirements",
    "Gallery",
  ];
  const Price_packages = [
    {
      id: 1,
      duration_unit: "day",
      is_duration_limit: true,
      is_content: true,
      duration_limit: [1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 30, 45, 60, 75, 90],
      content: [
        {
          id: 1,
          title: "Revisions",
          translated_label: "Revisions",
          edit_type: "dropdown",
          data_options: [
            {
              value: "0",
              text: "0",
              val: "0",
            },
            {
              value: "1",
              text: "1",
              val: "1",
            },
            {
              value: "2",
              text: "2",
              val: "2",
            },
            {
              value: "3",
              text: "3",
              val: "3",
            },
            {
              value: "4",
              text: "4",
              val: "4",
            },
            {
              value: "5",
              text: "5",
              val: "5",
            },
            {
              value: "6",
              text: "6",
              val: "6",
            },
            {
              value: "7",
              text: "7",
              val: "7",
            },
            {
              value: "8",
              text: "8",
              val: "8",
            },
            {
              value: "9",
              text: "9",
              val: "9",
            },
            {
              value: "UNLIMITED",
              text: "UNLIMITED",
              val: "UNLIMITED",
            },
          ],
        },
        {
          id: 2,
          title: "Versions Included",
          translated_label: "Number of concepts included",
          edit_type: "dropdown",
          data_options: [
            {
              value: "1",
              text: "1",
              val: "1",
            },
            {
              value: "2",
              text: "2",
              val: "2",
            },
            {
              value: "3",
              text: "3",
              val: "3",
            },
            {
              value: "4",
              text: "4",
              val: "4",
            },
            {
              value: "5",
              text: "5",
              val: "5",
            },
          ],
        },
        {
          id: 3,
          title: "Logo transparency",
          translated_label: "Logo transparency",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 4,
          title: "Vector file",
          translated_label: "Vector file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 5,
          title: "High resolution",
          translated_label: "Printable file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 6,
          title: "3D Image",
          translated_label: "3D mockup",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 7,
          title: "Source File",
          translated_label: "Source file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 8,
          title: "Stationery designs",
          translated_label: "Stationery designs",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 9,
          title: "Social media kit",
          translated_label: "Social media kit",
          edit_type: "checkbox",
          data_options: false,
        },
      ],
    },
    {
      id: 2,
      duration_unit: "day",
      is_duration_limit: true,
      is_content: true,
      duration_limit: [1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 30, 45, 60, 75, 90],
      content: [
        {
          id: 10,
          title: "Revisions",
          translated_label: "Revisions",
          edit_type: "dropdown",
          data_options: [
            {
              value: "0",
              text: "0",
              val: "0",
            },
            {
              value: "1",
              text: "1",
              val: "1",
            },
            {
              value: "2",
              text: "2",
              val: "2",
            },
            {
              value: "3",
              text: "3",
              val: "3",
            },
            {
              value: "4",
              text: "4",
              val: "4",
            },
            {
              value: "5",
              text: "5",
              val: "5",
            },
            {
              value: "6",
              text: "6",
              val: "6",
            },
            {
              value: "7",
              text: "7",
              val: "7",
            },
            {
              value: "8",
              text: "8",
              val: "8",
            },
            {
              value: "9",
              text: "9",
              val: "9",
            },
            {
              value: "UNLIMITED",
              text: "UNLIMITED",
              val: "UNLIMITED",
            },
          ],
        },
        {
          id: 11,
          title: "Versions Included",
          translated_label: "Number of concepts included",
          edit_type: "dropdown",
          data_options: [
            {
              value: "1",
              text: "1",
              val: "1",
            },
            {
              value: "2",
              text: "2",
              val: "2",
            },
            {
              value: "3",
              text: "3",
              val: "3",
            },
            {
              value: "4",
              text: "4",
              val: "4",
            },
            {
              value: "5",
              text: "5",
              val: "5",
            },
          ],
        },
        {
          id: 12,
          title: "Logo transparency",
          translated_label: "Logo transparency",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 13,
          title: "Vector file",
          translated_label: "Vector file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 14,
          title: "High resolution",
          translated_label: "Printable file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 15,
          title: "3D Image",
          translated_label: "3D mockup",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 16,
          title: "Source File",
          translated_label: "Source file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 17,
          title: "Stationery designs",
          translated_label: "Stationery designs",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 18,
          title: "Social media kit",
          translated_label: "Social media kit",
          edit_type: "checkbox",
          data_options: false,
        },
      ],
    },
    {
      id: 3,
      duration_unit: "day",
      is_duration_limit: true,
      is_content: true,
      duration_limit: [1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 30, 45, 60, 75, 90],
      content: [
        {
          id: 19,
          title: "Revisions",
          translated_label: "Revisions",
          edit_type: "dropdown",
          data_options: [
            {
              value: "0",
              text: "0",
              val: "0",
            },
            {
              value: "1",
              text: "1",
              val: "1",
            },
            {
              value: "2",
              text: "2",
              val: "2",
            },
            {
              value: "3",
              text: "3",
              val: "3",
            },
            {
              value: "4",
              text: "4",
              val: "4",
            },
            {
              value: "5",
              text: "5",
              val: "5",
            },
            {
              value: "6",
              text: "6",
              val: "6",
            },
            {
              value: "7",
              text: "7",
              val: "7",
            },
            {
              value: "8",
              text: "8",
              val: "8",
            },
            {
              value: "9",
              text: "9",
              val: "9",
            },
            {
              value: "UNLIMITED",
              text: "UNLIMITED",
              val: "UNLIMITED",
            },
          ],
        },
        {
          id: 20,
          title: "Versions Included",
          translated_label: "Number of concepts included",
          edit_type: "dropdown",
          data_options: [
            {
              value: "1",
              text: "1",
              val: "1",
            },
            {
              value: "2",
              text: "2",
              val: "2",
            },
            {
              value: "3",
              text: "3",
              val: "3",
            },
            {
              value: "4",
              text: "4",
              val: "4",
            },
            {
              value: "5",
              text: "5",
              val: "5",
            },
          ],
        },
        {
          id: 21,
          title: "Logo transparency",
          translated_label: "Logo transparency",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 22,
          title: "Vector file",
          translated_label: "Vector file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 23,
          title: "High resolution",
          translated_label: "Printable file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 24,
          title: "3D Image",
          translated_label: "3D mockup",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 25,
          title: "Source File",
          translated_label: "Source file",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 26,
          title: "Stationery designs",
          translated_label: "Stationery designs",
          edit_type: "checkbox",
          data_options: false,
        },
        {
          id: 27,
          title: "Social media kit",
          translated_label: "Social media kit",
          edit_type: "checkbox",
          data_options: false,
        },
      ],
    },
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
            {Price_packages[0].content.map((e: any) => (
              <>
                <div style={{ height: 10 }} />

                <div className={style.check_gig_item}>
                  <div className={style.left_side}>
                    <span className={style.gig_title_content}>
                      {e.translated_label}
                    </span>
                  </div>
                  <div className={style.right_side}>
                    <div className={style.price_right_side}>
                      <div className={style.price_box}>
                        {e.edit_type == "checkbox" ? (
                          <input
                            className={style.checkbox}
                            type="checkbox"
                            style={{
                              outline: "none",
                            }}
                            // checked={isChecked} // Set checked state
                            // onChange={handleChange}
                          />
                        ) : (
                          <select className={style.dropdown} name="cars">
                            {e?.data_options.map((e: any) => (
                              <>
                                <option value={e.value}>{e.text}</option>
                              </>
                            ))}
                          </select>
                        )}
                      </div>
                      <div className={style.price_box}>
                        {e.edit_type == "checkbox" ? (
                          <input
                            className={style.checkbox}
                            type="checkbox"
                            style={{
                              outline: "none",
                            }}
                            // checked={isChecked} // Set checked state
                            // onChange={handleChange}
                          />
                        ) : (
                          <select className={style.dropdown} name="cars">
                            {e?.data_options.map((e: any) => (
                              <>
                                <option value={e.value}>{e.text}</option>
                              </>
                            ))}
                          </select>
                        )}
                      </div>
                      <div className={style.price_box}>
                        {e.edit_type == "checkbox" ? (
                          <input
                            className={style.checkbox}
                            type="checkbox"
                            style={{
                              outline: "none",
                            }}
                            // checked={isChecked} // Set checked state
                            // onChange={handleChange}
                          />
                        ) : (
                          <select className={style.dropdown} name="cars">
                            {e?.data_options.map((e: any) => (
                              <>
                                <option value={e.value}>{e.text}</option>
                              </>
                            ))}
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div style={{ height: 40 }} />
          <div className={style.showrightside}>
            <div
              className={style.savebtncontinue}
              onClick={() => {
                addItem("Description & FAQ");
                setcurrent_index(2);
              }}
            >
              <text className={style.btn_text}>Save & Continue</text>
            </div>
          </div>
          <div style={{ height: 100 }} />
        </>
      )}
      {current_index == 2 && (
        <>
          <div style={{ height: 20 }} />

          <div className={style.category}>
            <div className={style.gig_title}>
              <div className={style.left_side}>
                <span className={style.gig_title_content}>Description</span>
                <span className={style.gig_title_content_desc}>
                  Briefly Describe Your Gig
                </span>
              </div>
              <div className={style.right_side}>
                <div className={style.Description_input_box}>
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
                    value={desc}
                    rows={4}
                    maxLength={500}
                    onChange={(e) => {
                      setdesc(e.target.value);
                    }}
                  />
                </div>
                <div style={{ height: 10 }} />
                <span className={style.max}>{desc.length}/ 500 max</span>
              </div>
            </div>
          </div>
          <div style={{ height: 40 }} />
          <div className={style.showrightside}>
            <div
              className={style.savebtncontinue}
              onClick={() => {
                addItem("Gallery");
                setcurrent_index(3);
              }}
            >
              <text className={style.btn_text}>Save & Continue</text>
            </div>
          </div>
          <div style={{ height: 100 }} />
        </>
      )}
      {current_index == 3 && (
        <>
          <div style={{ height: 20 }} />

          <div className={style.category}>
            <div className={style.gig_title}>
              <div className={style.left_side}>
                <span className={style.gig_title_content}>
                  Showcase Your Services In A Gig Gallery
                </span>
                <span className={style.gig_title_content_desc}>
                  Encourage buyers to choose your Gig by featuring a variety of
                  your work.
                </span>
                <br />
                <span
                  className={style.gig_title_content_desc}
                  style={{
                    color: "#000000",
                  }}
                >
                  Images (up to 3)
                </span>
              </div>
              <div className={style.Image_right_side}>
                <div className={style.Image_right_sid}>
                  <div className={style.image_box}>
                    <Image
                      src={"/upload_image.png"}
                      alt="Delivery Time"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className={style.image_box}>
                    <Image
                      src={"/upload_image.png"}
                      alt="Delivery Time"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className={style.image_box}>
                    <Image
                      src={"/upload_image.png"}
                      alt="Delivery Time"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                <div className={style.images_gereate}>
                  <div className={style.savebtncontinue}
                  onClick={()=>[
                    setopenmodel(true)
                  ]}
                  >
                    <text className={style.btn_text}>Generate Ai Images</text>
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
                addItem("Gallery");
                setcurrent_index(3);
              }}
            >
              <text className={style.btn_text}>Save & Published</text>
            </div>
          </div>

          <div style={{ height: 100 }} />
        </>
      )}
     {openmodel&&(
       <div className={style.modalmask}>
       <div className={style.modaldialog}>
         <h5 className={style.title}>Images Generated Through AI</h5>
         <div style={{ height: 20 }} />
         <div className={style.Image_right_sid}>
         {aiImageslist.map((e,index)=>(
             <div className={style.image_box_ai}
             
             style={{ border: aiselected_images.includes(index)?`2px solid #00A79D`:null }}
             >
             <Image
               src={"/images.png"}
               layout='fill' 
               alt="Delivery Time"
               objectFit="cover"
               onClick={()=>{
                 addimage(index)
               }}
             />
           {aiselected_images.includes(index)&&(
               <div className={style.select}>
               <Image
                     src={"/checked.png"}
                     alt="Delivery Time"
                     width={20}
                     height={20}
                   />
                   <div 
                   
                   style={{
                   height:10
                   }}
                   />
               </div>
           )

           }
           </div>
         ))

         }
           
         </div>
         <div style={{ height: 80 }} />
         <div >
           <div
             className={style.savebtncontinue}
             onClick={() => {
              //  addItem("Gallery");
              //  setcurrent_index(3);
              setopenmodel(false)
             }}
           >
             <text className={style.btn_text}>Upload</text>
           </div>
         </div>

         <div style={{ height: 100 }} />

       </div>
       
     </div>
     )

     }
    </div>
  );
};

export default Page;
