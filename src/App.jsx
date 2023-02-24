import React, { useState, useEffect } from 'react'
import moviesList from './components/MovieData.jsx';
import SearchBar from './components/SearchBar.jsx';
import MoviesList from './components/MoviesList.jsx';
import AddMovie from './components/AddMovie.jsx';
import './App.css';

  export default function App() {
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

