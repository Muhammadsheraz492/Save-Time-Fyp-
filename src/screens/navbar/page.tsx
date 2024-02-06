import React from 'react'
import style from './navbar.module.css'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div className={style.container}>
            <text>logo</text>
            <div className={style.links}>
                <Link href={'/'} className={style.link}>For Freelancer</Link>
                <Link href={'/'} className={style.link}>For Hiring</Link>
                <Link href={'/'} className={style.link}>Why Save Time</Link>
                <Link href={'/'} className={style.link}>Login</Link>
                <Link href={'/'} className={style.signup}>Sign up</Link>
            </div>
        </div>
    )
}
