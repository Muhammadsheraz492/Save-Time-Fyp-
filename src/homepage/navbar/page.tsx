"use client"
import React from 'react'
import style from './navbar.module.css'
import Link from 'next/link'
type NavbarProps = {
    show: boolean;
    onpress_login: any,
};
export default function Navbar({ show, onpress_login }: NavbarProps) {

    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevents the default form submission behavior
        // Call your function here
        // alert("Hello")
        window.location.href = "/search"
    };

    return (
        <div className={style.container}>
            <div className='flex items-center justify-center gap-20'>

                <text>logo</text>
                {show ? (
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Search for Freelancers or Services"
                            className={style.searchInput}

                        />
                    </form>
                ) : null}
            </div>
            <div className={style.links}>
                <Link href={'/'} className={style.link}>For Freelancer</Link>
                <Link href={'/'} className={style.link}>For Hiring</Link>
                <Link href={'/'} className={style.link}>Why Save Time</Link>
                <button onClick={onpress_login} className={style.link}>Login</button>
                <button onClick={onpress_login}  className={style.signup}>Sign up</button>
            </div>
        </div>
    )



}
// "use client"
// import React from 'react'
// import style from './navbar.module.css'
// import Link from 'next/link'
// export const Navbar: React.FC<{ show: Boolean }> = ({ show }) => {
//     return (
//         <div className={style.container}>
//             <text>logo</text>
//             {show ? (
//                 <input
//                     type="text"
//                     placeholder="Please Search the Skills..."
//                     className={style.searchInput}
//                 />
//             ):null}
//             <div className={style.links}>
//                 <Link href={'/'} className={style.link}>For Freelancer</Link>
//                 <Link href={'/'} className={style.link}>For Hiring</Link>
//                 <Link href={'/'} className={style.link}>Why Save Time</Link>
//                 <Link href={'/'} className={style.link}>Login</Link>
//                 <Link href={'/'} className={style.signup}>Sign up</Link>
//             </div>
//         </div>
//     )
// }
