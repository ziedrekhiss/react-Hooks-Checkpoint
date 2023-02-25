import React, { useState, useEffect } from 'react';
import moviesList from './MovieData.jsx';
import MoviesList from './MoviesList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default function Movies() {

    const [ratingSearch, setRatingSearch] = useState(0);
    const [searchMovie, setSearchMovie] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesList)
    }, [])

    return (
        <div >
            <SearchBar
                searchMovie={searchMovie}
                setSearchMovie={setSearchMovie}
                rate={ratingSearch} 
                setRatingSearch={setRatingSearch}
                />
            <MoviesList
                data={searchMovie
                    ? movies.filter(
                        e => e.title.toLowerCase().includes(searchMovie.toLocaleLowerCase())
                    )
                    : ratingSearch? movies.filter(e=>e.rate >= ratingSearch) : movies}/>
            <AddMovie setMovies={setMovies}/>
                    
            
        </div>
    )
}
