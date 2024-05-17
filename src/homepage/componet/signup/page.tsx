import React, { useRef, useState } from 'react'
import style from "./signup.module.css";
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { FaArrowLeftLong } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { CSSTransition } from 'react-transition-group';
interface Dialog_props {
    onpress: any,
}
function Signup_dialog({ onpress }: Dialog_props) {
    const [showOtp, setshowOtp] = useState(false)
    const inputs = useRef([]);

    // const focusNextInput = (index) => {
    //     if (index < inputs.current.length - 1) {
    //         inputs.current[index + 1].focus();
    //     }
    // };
    return (
        <dialog className={`
        fixed left-0 top-0 w-full h-full 
        bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur 
        flex justify-center items-center 
        pr-20 pl-20 pt-10 pb-10 
        ${style.fadeIn}
    `}>
            <div className="flex justify-between w-full h-full p-10 m-auto bg-white bg-center bg-cover rounded-lg">
                {!showOtp ?
                    <div className="relative w-full h-full overflow-auto transition-transform duration-300 ease-in-out bg-white bg-center bg-cover rounded-lg md:w-1/2"

                        style={{
                            scrollbarWidth: 'none',
                            animationName: 'slide',
                            animationDuration: '0.3s',
                            animationTimingFunction: 'ease-in-out'

                        }}
                    >
                        <FaArrowLeftLong className="text-blue-gray-600" size={26} color='#666666'
                        
                        onClick={onpress}
                        />
                        <div className='pl-20'>

                            {/* <div style={{ height: 8}} /> */}
                            <span className="text-sm">Step 1/2</span>

                        </div>
                        <div

                            style={{
                                width: "100%",
                                height: "90%",
                                position: 'relative',
                            }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/Frame_2.png")',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.3 // Adjust the opacity value for the background image
                            }} />

                            <div
                                className='pl-20 '
                                style={{
                                    position: 'relative',
                                    zIndex: 1, // Ensure the text appears above the background image

                                }}>
                                <div style={{ height: 12 }} />
                                <span className='text-4xl font-medium leading-tight tracking-tighter text-gray-900 font-inter'>What do you do at Savetime?</span>
                                <div style={{ height: 8 }} />

                                <span className={"text-blue-gray-700 font-inter text-base font-normal leading-6 tracking-normal "}>We’ll use this information to fill out your hiring profile.</span>
                                <br />
                                <br />
                                <div className='flex' style={{ width: "85%", justifyContent: "space-between" }}>
                                    <div className="flex flex-col justify-center items-start gap-0.5 p-0.5   flex-shrink-0 border rounded-lg" style={{ width: "48%", padding: "10px", height: '68px' }}>
                                        <span className="text-xs font-normal leading-4 font-inter"
                                            style={{ color: "#677084" }}
                                        >
                                            First Name</span>
                                        <input
                                            type='email'
                                            className="w-full border border-nano focus:border-blue-500"
                                            style={{ border: "none", outline: "none", color: "#000", backgroundColor: "transparent" }}
                                            placeholder='First Name'

                                        />
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-0.5 p-0.5   flex-shrink-0 border rounded-lg" style={{ width: "48%", padding: "10px", height: '68px' }}>
                                        <span className="text-xs font-normal leading-4 font-inter"
                                            style={{ color: "#677084" }}
                                        >
                                            First Name</span>
                                        <input
                                            type='email'
                                            className="w-full border border-nano focus:border-blue-500"
                                            style={{ border: "none", outline: "none", color: "#000", backgroundColor: "transparent" }}
                                            placeholder='First Name'

                                        />
                                    </div>
                                </div>
                                <div style={{ height: 10 }} />
                                <div className="flex flex-col justify-center items-start gap-0.5 p-0.5   flex-shrink-0 border rounded-lg" style={{ width: "85%", padding: "10px", height: '68px' }}>
                                    <span className="text-xs font-normal leading-4 font-inter"
                                        style={{ color: "#677084" }}
                                    >
                                        Email</span>
                                    <input
                                        type='email'
                                        className="w-full border border-nano focus:border-blue-500"
                                        style={{ border: "none", outline: "none", color: "#000", backgroundColor: "transparent" }}
                                        placeholder='Example@gmail.com'

                                    />
                                </div>
                                <div style={{ height: 10 }} />
                                <div className="flex flex-col justify-center items-start gap-0.5 p-0.5   flex-shrink-0 border rounded-lg" style={{ width: "85%", padding: "10px", height: '68px' }}>
                                    <span className="text-xs font-normal leading-4 font-inter"
                                        style={{ color: "#677084" }}
                                    >
                                        Professional title</span>
                                    <input
                                        type='email'
                                        className="w-full border border-nano focus:border-blue-500"
                                        style={{ border: "none", outline: "none", color: "#000", backgroundColor: "transparent" }}
                                        placeholder='User Interface Designer'

                                    />
                                </div>
                                <span className="text-sm font-normal font-inter" style={{
                                    color: "#677084",

                                    fontSize: "0.75rem"
                                }}>
                                    Hiring Manager, Product Designer, etc.
                                </span>
                                <div style={{ height: 10 }} />
                                <div className="flex flex-col justify-center items-start gap-0.5 p-0.5   flex-shrink-0 border rounded-lg" style={{ width: "85%", padding: "10px", height: '68px' }}>
                                    <span className="text-xs font-normal leading-4 font-inter"
                                        style={{ color: "#677084" }}
                                    >
                                        Password</span>
                                    <input
                                        type='email'
                                        className="w-full border border-nano focus:border-blue-500"
                                        style={{ border: "none", outline: "none", color: "#000", backgroundColor: "transparent" }}
                                        placeholder='Enter your Password'

                                    />
                                </div>
                                <div style={{ height: 10 }} />

                                <span className="text-xs font-normal leading-4 font-inter"
                                    style={{ color: "#677084" }}
                                >
                                    Add a photo to help build connection and trust.</span>
                                <div style={{ height: 10 }} />
                                <div className='flex gap-3 p-3 text-center border border-black rounded-lg cursor-pointer'
                                    onClick={() => {

                                    }}
                                    style={{ width: 180 }}>
                                    <TfiReload className="text-blue-gray-600" color='#000' />
                                    <span className="text-xs font-normal leading-4 font-inter"
                                        style={{ color: "#373F51" }}
                                    >
                                        Replace profile photo</span>
                                </div>
                                <div style={{ height: 20 }} />

                                <div
                                    className='flex gap-3 p-3 text-center border border-black rounded-full cursor-pointer'
                                    onClick={() => {
                                        // Add your onClick logic here
                                        setshowOtp(true)

                                    }}
                                    style={{
                                        display: 'flex',
                                        width: '91px',
                                        height: '29.88px',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        backgroundColor: "#222834"
                                    }}
                                >
                                    <span
                                        style={{
                                            color: '#FFF',
                                            textAlign: 'center',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: '19.88px' /* 142% */
                                        }}
                                    >
                                        Continue
                                    </span>
                                </div>




                            </div>
                        </div>


                    </div> :
                     <div className="relative w-full h-full overflow-auto transition-transform duration-300 ease-in-out bg-white bg-center bg-cover rounded-lg md:w-1/2"

                        style={{
                            scrollbarWidth: 'none',
                            animationName: 'slide',
                            animationDuration: '0.50s',
                            animationTimingFunction: 'ease-in-out'

                        }}
                    >
                        <FaArrowLeftLong className="cursor-pointer text-blue-gray-600" size={26} color='#666666' 
                        
                        onClick={()=>{
                            setshowOtp(false)
                        }}
                        />
                        <div className='pl-20'>

                            <span className="text-sm">Step 2/2</span>

                        </div>
                        <div

                            style={{
                                width: "100%",
                                height: "90%",
                                position: 'relative',
                            }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/Frame_2.png")',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.3 // Adjust the opacity value for the background image
                            }} />

                            <div
                                className='pl-20 '
                                style={{
                                    position: 'relative',
                                    zIndex: 1, // Ensure the text appears above the background image

                                }}>
                                <div style={{ height: 12 }} />
                                <span className='text-4xl font-medium leading-tight tracking-tighter text-gray-900 font-inter'>Verify yourself</span>
                                <div style={{ height: 8 }} />

                                <span className={"text-blue-gray-700 font-inter text-base font-normal leading-6 tracking-normal "}>We have sent otp code to the email</span>
                                {/* <br /> */}
                                <div style={{ height: 1 }} />

                                <span style={{
                                    fontWeight: "bold",
                                    // color:"#677084"
                                }}>Example@gmail.com</span>

                                <div style={{ height: 20 }} />
                                {/* <div className="flex items-center gap-4">
{[0, 1, 2, 3,4,5].map((index) => (
<input
key={index}
type="text"
maxLength="1"
ref={(el) => (inputs.current[index] = el)}
className="w-12 h-12 text-center bg-transparent border border#D0D4DC rounded-lg"
onInput={() => focusNextInput(index)}
/>
))}
</div> */}
                                <div className="flex flex-col justify-center items-start gap-0.5 p-0.5   flex-shrink-0 border rounded-lg" style={{ width: "48%", padding: "10px", height: '68px' }}>
                                    <span className="text-xs font-normal leading-4 font-inter"
                                        style={{ color: "#677084" }}
                                    >
                                        One Time Password                </span>
                                    <input
                                        type='text'
                                        className="w-full border border-nano focus:border-blue-500"
                                        style={{ border: "none", outline: "none", color: "#000", backgroundColor: "transparent" }}
                                        placeholder='Enter your Otp '

                                    />
                                </div>
                                {/* <div style={{ height: 13 }} /> */}
                                {/* <span className="text-xs font-normal leading-4 font-inter"
                    style={{ color: "#677084" }}
                >
                    Didn't Received Code?</span> */}
                                {/* <div style={{ height: 2 }} /> */}
                                <div style={{ height: 13 }} />

                                <span className="text-xs font-normal leading-4 font-inter"
                                    style={{ color: "#677084" }}
                                >
                                    Resend Code (0:23)</span>

                                <div style={{ height: 13 }} />

                                <div
                                    className='flex gap-3 p-3 text-center border border-black rounded-full cursor-pointer'
                                    onClick={() => {
                                        // Add your onClick logic here
                                    }}
                                    style={{
                                        display: 'flex',
                                        width: '91px',
                                        height: '29.88px',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        backgroundColor: "#222834"
                                    }}
                                >
                                    <span
                                        style={{
                                            color: '#FFF',
                                            textAlign: 'center',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: '19.88px' /* 142% */
                                        }}
                                    >
                                        Continue
                                    </span>
                                </div>




                            </div>
                        </div>


                    </div>

                }
                {/* OTP Componet */}




                <div className="p-8 bg-white bg-center bg-cover rounded-lg" style={{ width: "40%", backgroundColor: 'white', borderRadius: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
                    <div className="flex flex-col h-full justify-items-center">
                        <div style={{
                            borderWidth: 5,
                            width: '180px',
                            height: '180px',
                            backgroundImage: 'linear-gradient(to bottom, #ff8a00, #da1b60)',
                            borderRadius: "100%",
                            alignSelf: "center"
                        }}></div>

                        <div className='flex items-center justify-center'>
                            <span className="f" style={{
                                backgroundImage: 'linear-gradient(to right, #F3CA4D 0%, #FF989A 43%, #CBABFF 95%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: 30,
                                textAlign: 'center'
                            }}>First Last</span>
                        </div>
                        <div style={{ height: 30 }} />


                        <hr style={{
                            width: '100%',
                            margin: '0 auto',
                            border: '1px solid #E5E7EB'
                        }} />

                        <div style={{ height: 30 }} />

                        <span style={{ fontSize: 17, color: "#4A5264" }}>EMAIL</span>
                        <div style={{ height: 10 }} />
                        <span style={{ fontSize: 17, color: "black" }}>Email@gmail.com</span>
                        <div style={{ height: 10 }} />

                        <hr style={{
                            width: '100%',
                            margin: '0 auto',
                            border: '1px solid #E5E7EB'
                        }} />

                        <div style={{ height: 10 }} />
                        <span style={{ fontSize: 17, color: "#4A5264" }}>PROFESSIONAL TITLE</span>
                        <div style={{ height: 10 }} />
                        <span style={{ fontSize: 17, color: "black" }}>User Interface Design</span>
                        <div style={{ height: 10 }} />

                        <hr style={{
                            width: '100%',
                            margin: '0 auto',
                            border: '1px solid #E5E7EB'
                        }} />

                        <div style={{ height: 10 }} />
                        <span style={{ fontSize: 17, color: "#4A5264" }}>LOCATION</span>
                        <div style={{ height: 10 }} />
                        <span style={{ fontSize: 17, color: "black" }}>Qatar</span>


                    </div>
                </div>
            </div>

        </dialog>


    )
}

export default Signup_dialog