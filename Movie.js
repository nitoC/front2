import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/sidebar';
import movieplay from './assets/images/movieplay.png'
import MovieDetails from './components/movieDetails';
import { useSelector} from 'react-redux'
import Nextmovies from './components/nextmovies';

const Movie = ()=> {
    const movie = useSelector((state) => state)
    const [data, setdata] = useState()
    console.log(movie.value, "movie")
  useEffect(()=>{
    setdata(movie.value)
    console.log(movie.value)
  },[])
    return ( 
        <>
        <div className="movie">
          
          <Sidebar/>
          <div className='movie-container'>
          <div className='movie-body'>
            <div  className='movie-poster'>
              <div className='movie-play'>
                <div className='movie-play-icon'>
              <div className='movie-poster-elipse'>
              <img src={movieplay} className='movie-poster-play' alt='poster-image'/>
                </div>
                  
                </div>
              <p className='play-text'> Watch Trailer</p>
              </div>
              <img src={data?"https://image.tmdb.org/t/p/w500/" + data.backdrop_path:""} className='movie-poster-img' alt='poster-image'/>
            </div>
          </div>
           <div className='details-wrapper'>
            <MovieDetails details = {data?data:''}/>
            <Nextmovies  nextM= {data?data:''}/>
           </div>
          </div>
        
        </div>
        </>
     );
}

export default Movie;