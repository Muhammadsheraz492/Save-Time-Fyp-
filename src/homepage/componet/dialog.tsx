import React from 'react'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa';

import Image from 'next/image'
interface Dialog_props{
    onpress:any,
    login_onpress:any,
    signup_onpress:any,

}
function Dialog({onpress,login_onpress,signup_onpress}:Dialog_props) {
  return (
    <dialog
    className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full pt-20 pb-20 pl-40 pr-40 overflow-auto bg-black bg-opacity-50 backdrop-blur">
    <div className="w-full h-full p-8 m-auto bg-white bg-center bg-cover rounded-lg" style={{ backgroundImage: 'url("/SignFrame.png")', backgroundSize: '100% 100%', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}>
    <div className="flex justify-end"
    onClick={onpress}
    style={{cursor:"pointer"}}
    
    >
  <FaTimes className="text-blue-gray-600"  size={26}/>
</div>
      <div className="flex flex-col justify-center h-full justify-items-center">
        <span className='text-2xl font-medium tracking-tighter text-blue-900 font-inter leading-11'>First, enter your work email</span>
        <br />
        <span className={"text-blue-gray-700 font-inter text-base font-normal leading-6 tracking-normal"}>Sign In with the email address or google you use at work.</span>
        <br />
        {/* <Link href={"/pathname"}> */}
          <button
          onClick={login_onpress}
          
          type="button" className="pt-3 pb-3 text-base font-medium leading-6 text-center text-white bg-gray-900 rounded-full font-inter" style={{ width: "39%" }}>Continue With Email</button>
        {/* </Link> */}
        <br />
        <span className="text-xs font-medium leading-4 tracking-wider uppercase text-blue-gray-600 font-inter " style={{ width: "450px", textAlign: 'center' }}>
          Or
        </span>

        <br />
        <Link href={"/pathname"}>
          <button type="button" className="flex items-center pt-2 pb-2 text-base font-medium leading-6 text-center bg-white border border-gray-300 rounded-full text-blue-gray-800 font-inter"
            style={{ width: "39%", alignItems: "center", justifyContent: "center" }}
          >
            <Image
              src={"/google.svg"}
              alt='more'
              width={28}
              height={28}
            />
            <div style={{ width: "10px" }} />
            Continue with Google
          </button>
        </Link>
        <br />
        <div style={{ width: "39%", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" }}>
          <span className="text-sm font-normal leading-5 text-blue-gray-700 font-inter tracking-norma">
            Dont have an Account?
          </span>
          {/* <Link href={"/Sign_up"}> */}
            <span 
            onClick={signup_onpress}
            
            className="ml-1 text-sm font-normal leading-5 tracking-normal text-purple-600 cursor-pointer font-inter">
              Sign Up here.
            </span>

          {/* </Link> */}


        </div>


      </div>
    </div>
  </dialog>
  )
}

export default Dialog