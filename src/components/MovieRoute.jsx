import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function MovieRoute() {

    const {id}= useParams() ; 
    const location= useLocation();

  return (
    <div>
        <iframe src={location.state.trailer} ></iframe>
        <p>{location.state.description}</p>
    </div>
  )
}
