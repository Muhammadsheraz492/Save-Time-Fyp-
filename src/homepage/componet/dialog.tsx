import React from 'react'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa';

import Image from 'next/image'
interface Dialog_props{
    onpress:any
}
function Dialog({onpress}:Dialog_props) {
  return (
    <dialog
    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center pr-40 pl-40 pt-20 pb-20">
    <div className="w-full h-full bg-white m-auto  p-8 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("/SignFrame.png")', backgroundSize: '100% 100%', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}>
    <div className="flex justify-end"
    onClick={onpress}
    style={{cursor:"pointer"}}
    
    >
  <FaTimes className="text-blue-gray-600"  size={26}/>
</div>
      <div className="h-full flex flex-col  justify-items-center justify-center">
        <span className='text-blue-900 font-inter font-medium text-2xl leading-11 tracking-tighter'>First, enter your work email</span>
        <br />
        <span className={"text-blue-gray-700 font-inter text-base font-normal leading-6 tracking-normal"}>Sign In with the email address or google you use at work.</span>
        <br />
        <Link href={"/pathname"}>
          <button type="button" className="text-center font-inter text-base font-medium leading-6 bg-gray-900 text-white pt-3 pb-3 rounded-full" style={{ width: "39%" }}>Continue With Email</button>
        </Link>
        <br />
        <span className="text-blue-gray-600 font-inter text-xs font-medium leading-4 tracking-wider uppercase " style={{ width: "450px", textAlign: 'center' }}>
          Or
        </span>

        <br />
        <Link href={"/pathname"}>
          <button type="button" className="text-blue-gray-800 text-center font-inter text-base font-medium leading-6 border border-gray-300 bg-white pt-2 pb-2 rounded-full flex items-center"
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

export default Dialog