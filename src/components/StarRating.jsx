import React from 'react'
import {FaStar} from 'react-icons/fa';

export default function StarRating({set, rating}) {

    const stars = (x) => {
        let star = [];
        for (let i = 0; i < 5; i++) {
            if (i < x) {
                star.push(
                    <span
                        className='rating'
                        key={i}
                        onClick={() => set(i + 1)}
                        style={{
                            cursor: 'pointer'
                        }}>
                        <FaStar size="15" color={"#ffc107"}/>
                    </span>
                );
            } else {
                star.push(
                    <span
                        className='rating'
                        key={i}
                        style={{
                            cursor: 'pointer'
                        }}
                        onClick={() => set(i + 1)}>
                        <FaStar size="15"/>
                    </span>
                );
            }
        }
        return star;
    }
    return (<div>
        {stars(rating)}
    </div>)
}
