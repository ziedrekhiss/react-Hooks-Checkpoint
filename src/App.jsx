import React from 'react'
import Movies from './components/Movies';
import MovieRoute from './components/MovieRoute';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';

  export default function App() {

    return (
        <div>

        <BrowserRouter>

            <Link to="/">Home</Link>
            <Routes>
                <Route path="/" element={<Movies/>}/>
                <Route path="/:id" element={<MovieRoute/>} />
            </Routes>
        
        </BrowserRouter>

    </div>
  )
}