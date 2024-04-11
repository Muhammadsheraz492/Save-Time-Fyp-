import React from 'react'
import style from './footer.module.css'
import { FaPaperPlane } from 'react-icons/fa'; // Import the send icon from react-icons library
import { text } from '@fortawesome/fontawesome-svg-core';

function Footer() {
    return (
        <div className={style.main_container}>
            <div className={style.row}>
                <div className={style.column}>
                    <span>First column</span>
                    <text>First Page</text>
                    <text>First Page</text>
                    <text>First Page</text>
                </div>
                <div className={style.column}>
                    <span>Second column</span>
                    <text>First Page</text>
                    <text>First Page</text>
                    <text>First Page</text>
                </div>
                <div className={style.column}>
                    <span>Third column</span>
                    <text>First Page</text>
                    <text>First Page</text>
                    <text>First Page</text>
                </div>
                <div className={style.Subscribe}>
                    <span>Subscribe</span>
                    <div className={style.text_input}>
                        <input type="text" placeholder="Enter your text" />
                        <FaPaperPlane className={style.send_icon} size={20} color='#0146B1' />
                    </div>
                    <div className={style.desc}>

                        <span >
                            Join our newsletter to stay up to date on features and releases
                        </span>
                    </div>
                    {/* <text>First Page</text>
        <text>First Page</text> */}
                </div>
            </div>
            <div style={{height:20}} >
                {/* <span>hsdfbvj</span> */}
                </div>

        </div>
    )
}

export default Footer