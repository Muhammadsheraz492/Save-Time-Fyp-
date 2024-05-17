import React from 'react'
import style from "./login_dialog.module.css";
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { FaArrowLeftLong } from "react-icons/fa6";
interface Dialog_props{
    onpress:any,
    back_press:any
}
function Login_dialog({onpress,back_press}:Dialog_props) {
    
    return (
        <dialog
        className={`fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center pr-40 pl-40 pt-20 pb-20 ${style.fadeIn}`}> 
        {/* // className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center pr-40 pl-40 pt-20 pb-20"> */}
            <div className="w-full h-full bg-white m-auto  p-8 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("/SignFrame.png")', backgroundSize: '100% 100%', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}>
                <div
                    className="flex justify-end"
                    onClick={onpress}
                    style={{ cursor: "pointer" }}

                >
                    <FaTimes className="text-blue-gray-600" size={26} />
                </div>
                <div className="h-full flex flex-col  justify-items-center justify-center">
                    <div
                    onClick={back_press}
                    style={{cursor:"pointer"}}
                    
                    >
                        <FaArrowLeftLong className="text-blue-gray-600" size={26} color='#666666' />

                    </div>
                    <br />
                    <span className='text-gray-900 font-inter font-medium text-4xl leading-tight tracking-tighter'>Enter your email Address</span>
                    <br />
                    <span className={"text-blue-gray-700 font-inter text-base font-normal leading-6 tracking-normal "}>Sign In with the email address you use at work.</span>
                    <br />
                    <div className="flex flex-col justify-center items-start gap-0.5 p-0.5   flex-shrink-0 border rounded-lg" style={{ width: "39%", padding: "10px",height:'68px' }}>
                        {/* Your content */}
                        <span className="font-inter text-xs font-normal leading-4"
                            style={{ color: "#677084" }}
                        >
                            Hiring email address</span>
                        <input
                            type='email'
                            className="w-full border border-nano focus:border-blue-500"
                            // width={"100%"}
                            style={{ border: "none", outline: "none", color: "#000" }}
                            placeholder='muhammadshiraz@gmail.com'

                        />
                    </div>
                    <br />
                    <div className="flex flex-col justify-center items-start gap-0.5 p-0.5  h-68 min-h-68 flex-shrink-0 border rounded-lg" style={{ width: "39%", padding: "10px" ,height:'68px'}}>
                        {/* Your content */}
                        <span className="font-inter text-xs font-normal leading-4" style={{ color: "#677084;" }}>
                            Password</span>
                        <input
                            type='password'
                            className="w-full border border-nano focus:border-blue-500"
                            // width={"100%"}
                            style={{ border: "none", outline: "none", color: "#000" }}
                            placeholder='*********'


                        />
                    </div>
                    <div style={{ height: '10px' }} />
                    <div
                        className="flex justify-end"


                        style={{ width: "39%", alignItems: "flex-end", justifyContent: "flex-end" }}>

                        <span className="text-right font-inter text-sm font-normal leading-5 tracking-normal"

                            style={{ color: "#677084" }}
                        >
                            Forget Password?
                        </span>
                    </div>
                    <br />


                    <Link href={"/pathname"}>
                        <button type="button" className="text-center font-inter text-base font-medium leading-6 text-white pt-3 pb-3 rounded-full" style={{ width: "39%", backgroundColor: "#222834" }}>Sign In</button>
                    </Link>
                    <br />


                    <div style={{ width: "39%", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" }}>
                        <span className="text-blue-gray-700 font-inter text-sm font-normal leading-5 tracking-norma">
                            Dont have an Account?
                        </span>
                        <Link href={"/Sign_up"}>
                            <span className="ml-1 text-purple-600 font-inter text-sm font-normal leading-5 tracking-normal">
                                Sign Up here.
                            </span>

                        </Link>


                    </div>


                </div>
            </div>
        </dialog>
    )
}

export default Login_dialog