import React from 'react'
import MovieCard from './MovieCard'
import './MoviesList.css';

function MoviesList({data}) {
    return (
        <div className='card'>
            {data.map(e=>(
                    <MovieCard movies={e}/>
                )
                )}
        </div>
        )
};

export default MoviesList
