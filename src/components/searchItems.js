import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { getMovie } from '../features/movieSlice'
import { useNavigate } from 'react-router-dom';


const SearchItems = ({movie, display, handledisplay}) => {
    const [card, setcard] = useState();
    const dispatch = useDispatch()
    const history = useNavigate()
    const auth = process.env.REACT_APP_AUTH
    let result;
    let final;

    const url =movie?`https://api.themoviedb.org/3/movie/${movie.id}`:'';
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:auth
          },
    };
    const movieHandler = (item) => {
        console.log(item)
        dispatch(getMovie(item)); // Dispatch the Redux action
        handledisplay('no-display')
        // Use history to navigate to another route
      history('/movie'); // Replace '/another-route' with your desired route
    };

    async function fetchdata() {
      try{
        result = await axios.get(url, options);
        final = await result.data;
        console.log(result.data);
        setcard(final);
        
      }catch(err){
        console.log(err)
      }
    }
    
    useEffect(() => {
        fetchdata();
       
    }, []);
  
  return (
    <div className={display? `search-modal display display}`:'search-modal no-display' } >
        {Array.from(movie)? (
    Array.from(movie).slice(0, 10).map((item, key) => {
        console.log(item)
      return <div key={key} onClick={()=>movieHandler(item)} className='search-item'>
        {item.title}
      </div>

    }
    )
  ) : (
    <img className="fallback" src="" alt="fallback image" />
  )}
    </div>
  )
}

export default SearchItems