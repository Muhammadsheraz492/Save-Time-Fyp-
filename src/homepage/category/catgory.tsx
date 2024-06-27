"use client"
import React, { useState } from 'react'
import style from './catgory.module.css'
import Text_component from '../componet/text_component'
import Category_card from '../componet/category_card'
import Image from 'next/image'
function Catgory() {
    let data = ["Programming & <br/> Tech","Graphics & Design", "Digital Marketing", "Writing & Translation", "Video & Animation", "AI Services", "Music & Audio", "Business"];
    const [showMore, setShowMore] = useState(false);

    // Slice the data array to show only the first 6 items or all items depending on the showMore state
    const displayedData = showMore ? data : data.slice(0, 8);

    return (
        <div className={style.main_Container}>
            <Text_component title={"Here are Something You’d Need"} button={!showMore} onClick={() => setShowMore(true)} />
            <div className={style.category}>
                {displayedData.map((e) => (
                    <Category_card data={e}  key={e} />
                ))}
            </div>
            <div className={style.more}
            
            onClick={()=>{
                setShowMore(!showMore )
            }}
            >
                <span>More Categories</span>
                <Image  
                src={"/more.svg"}
                alt='more'
                width={15}
                height={15}
                
                />
            </div>
        </div>
    );
}

export default Catgory