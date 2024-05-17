import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import style from './rating.module.css'
// StarRating Component
interface StarRatingTypes{
    rating:number
}
const StarRating = ({ rating }:StarRatingTypes) => {
    const maxStars = 5;

    return (
        <div className="flex items-center">
            {[...Array(maxStars)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={index < rating ? faStarSolid : faStarRegular}
                    color={index < rating ? '#FFD700' : '#D3D3D3'}
                    className="w-6 h-6" // Adjust size as needed
                />
            ))}
            <div style={{width:5}} />
            <span className={style.rating}>{rating}</span>
        </div>
    );
};

export default StarRating
// Parent Component Usage

