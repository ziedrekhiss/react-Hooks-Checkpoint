import React from 'react'
import { useNavigate } from "react-router-dom";
import './MovieCard.css'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'

function MovieCard({movies:{id, title, posterUrl, description, rate, trailer}}) {
    
    const navigate = useNavigate();

    function desc(){
        navigate(`${id}` , {state : {trailer: trailer, description: description}})
    }

    return (
        <div key={id} className='movieCard' onClick={()=>desc()} >
            <img src={posterUrl} alt="poster"/>
            <h4>{title}</h4>
            <p><span>Description: </span>{description}</p>
            <StarRating rating={rate}/>
            <button><Link to={`${id}`} state={{trailer: trailer, description: description}} >Trailer</Link></button>
        </div>
    )
}

export default MovieCard


