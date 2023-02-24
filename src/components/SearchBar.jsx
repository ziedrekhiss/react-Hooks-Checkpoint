import React, {useState} from 'react';
import './SearchBar.css';
import StarRating from './StarRating';

const SearchBar = ({setSearchMovie, rate, setRatingSearch}) => {

    return (
        <div className='container'>
            <div className='searchBar'>
                <div>
                    <input type="text" onChange={(event)=>setSearchMovie(event.target.value)}  placeholder='Search movie' /> 
                    <StarRating set={setRatingSearch} rating={rate} />
                </div>
                
            </div>
        </div>
    );
}

export default SearchBar;
