"use client"
import React, { useState } from 'react'
import style from './catgory.module.css'
import Text_component from '../componet/text_component'
import Category_card from '../componet/category_card'
function Catgory() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [showMore, setShowMore] = useState(false);

    // Slice the data array to show only the first 6 items or all items depending on the showMore state
    const displayedData = showMore ? data : data.slice(0, 8);

    return (
        <div className={style.main_Container}>
            <Text_component title={"Here are Something You’d Need"} button={!showMore} onClick={() => setShowMore(true)} />
            <div className={style.category} style={{ height: 270 }}>
                {displayedData.map((e) => (
                    <Category_card key={e} />
                ))}
            </div>
            <div>
                <span>More Categories</span>
            </div>
        </div>
    );
}

export default Catgory