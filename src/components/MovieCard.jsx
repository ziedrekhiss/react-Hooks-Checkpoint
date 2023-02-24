import React from 'react'
import './MovieCard.css'
import StarRating from './StarRating'

function MovieCard({movies:{id, title, posterUrl, description, rate}}) {
    
    return (
        <div key={id} className='movieCard'>
            <img src={posterUrl} alt="poster"/>
            <h4>{title}</h4>
            <p><span>Description: </span>{description}</p>
            <p><StarRating rating={rate}/></p>
        </div>
    )
}

export default MovieCard


