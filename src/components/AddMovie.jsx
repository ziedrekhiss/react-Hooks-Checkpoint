import React, {useState} from 'react'
import './AddMovie.css';

function AddMovie({setMovies}) {
    const [newMovieData, setNewMovieData] = useState ({
      title: ``,
      posterUrl: ``,
      description: ``,
      rate: 0,
    })

    const onChangeHandler = (e)=>
        setNewMovieData((prev)=>{return{...prev, [e.target.name] : e.target.value}})
    return (
        <div>
            <div className='addBox'>
                <h4>Add Movie</h4>
                <input onChange={(e)=>onChangeHandler(e)} type={"text"} name='title' placeholder='Movie Tiltle' />
                <input onChange={(e)=>onChangeHandler(e)} type={"text"} name='posterUrl' placeholder='posterUrl' />
                <input onChange={(e)=>onChangeHandler(e)} type={"text"}  name='description' placeholder='Movie description' />
                <input onChange={(e)=>onChangeHandler(e)} type={"number"} name='rate' placeholder='Movie rate' />
                <button onClick={(e)=>{
                    e.preventDefault();
                    setMovies((prevState=>[...prevState, newMovieData]))
                }}>Add Movie</button>
            </div>
            
        </div>
    )
}

export default AddMovie