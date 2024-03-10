// Search.js
import React from 'react';
import style from './search.module.css';
import    SearchIcon  from './Search.svg';
import Image from 'next/image';
export default function Search() {
  return (
    <div className={style.search}>
      <div className={style.search_compoent}>
      <Image
        src={SearchIcon}
        alt="My SVG"
        width={30}
        height={30}
      />
         <div className={style.dropdown}>
          <select className={style.dropdownSelect}>
            <option value="option1">Freelancer</option>
            <option value="option2">Agency</option>
          </select>
        </div>
        <div className={style.divider}></div>
        <input
          type="text"
          placeholder="Please Search the Skills..."
          className={style.searchInput}
        />
          <button className={style.searchButton}>Search</button>
       </div>
    </div>
  );
}
