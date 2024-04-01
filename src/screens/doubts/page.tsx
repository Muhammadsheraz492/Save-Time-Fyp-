import React from 'react'
import style from './some_doubts.module.css'
import Image from 'next/image'
function Some_Doubts() {
    return (
        <div className={style.main_container}>
            <div className={style.title}>
                <span>Have Some Doubts To Get Started ?</span>
            </div>
            <div className={style.list}>
                <Blog_card />
                <Blog_card />
                <Blog_card />
            </div>
            <div className={style.Join_seller}>

            <div className={style.btn}>

                <span>Join SaveTime Now</span>
            </div>
            </div>
        </div>
    )
}

export default Some_Doubts
const Blog_card = () => (
    <div className={style.card}>
        <div className={style.img}>
            <Image src={'/Image.png'}
                width={215}
                height={223}
                objectFit="cover" alt={'Category'} />
        </div>
        <div className={style.card_details}>
            <div className={style.blog_title}>
                <span>How to Get a Perfect Expert to finish your tasks ?</span>

            </div>
            <div className={style.des}>
                <span>Where you’re a freelancer or a large company, sending invoices is an essential part of any successful business.</span>

            </div>
            <div className={style.readmore}>
                <span>Read More</span>
                <Image src={'/Frame.svg'}
                    width={8}
                    height={8}
                    alt={'Category'} />
            </div>
        </div>
    </div>
)