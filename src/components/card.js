import React, { useEffect, useState } from 'react';
import { memo } from 'react';
import apple from "../assets/images/apple.png";
import imbd from "../assets/images/imbd.png";
import elipse from "../assets/images/elipse.png";
import heart from "../assets/images/Heart.png";
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { getMovie } from '../features/movieSlice'
import { useNavigate } from 'react-router-dom';

const Card = ({movie})=> {
    const [card, setcard] = useState();
    const [click, setclick] = useState('')
    const dispatch = useDispatch()
    const history = useNavigate()
    const auth = process.env.REACT_APP_AUTH
    let isclick=false;
    let itemData;
    let result;
    let final;

    const url =`https://api.themoviedb.org/3/movie/${movie.id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:auth
      },
    };
    const clickHandler = () =>{
      if(isclick){
        setclick('')
        isclick = false
      }else{
        setclick('click')
        isclick = true
      }
    }
    const movieHandler = () => {
      dispatch(getMovie(card)); // Dispatch the Redux action
  
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
        <>
        <div data-testid= "movie-card" className="card">
          <div data-testid= "movie-poster" className='card-poster'>
            <div onClick={clickHandler} className={`favourites ${click}`}>
            <img src={elipse} className='elipse' alt='elipse icon'/>
            <img src={heart} className='heart' alt='heart icon'/>
            </div>
            <img onClick={movieHandler} src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className='poster-image' alt='poster img'/>
          </div>
          <div onClick={movieHandler} className='card-country'>
            {card?
            (card.production_countries.map((item,key)=>{
              itemData = card.release_date;
              if(item.name === "United Kingdom"){
            
                return <span key={key}>UK, </span>
              }
              if(item.name === "United States of America"){
                console.log(item.name,"us")
                return <span key={key}>USA, </span>
              }
              else{
                return <span>{item.name.toUpperCase() + ","}</span>
              }
            }) 
            )
             :"hello"
          }
               {itemData? <span data-testid= "movie-release-date"> {itemData.split("-")[0]}</span> : ""}

          </div>
          <h2 data-testid= "movie-title" onClick={movieHandler} className='card-name'>
            {movie.title}
          </h2>
          <div onClick={movieHandler} className='card-rating'>
          <div className="movie-rating">
                <img src={imbd} alt="movie-rating-image" className="rating-img" />
                <span className="movie-rating-text">87/100</span>
              </div>
              <div className="watch-rate">
                <img src={apple} alt="movie-rating-image" className="rating-img" />
                <span className="movie-rating-text">97%</span>
              </div>
          </div>
          <p onClick={movieHandler} className='card-movie-genre'>
           {card?card.genres.map((item,key)=>{
         
              if(card.genres.indexOf(item)===card.genres.length - 1){
               return <span>{item.name}</span>
              }else{
                return <span> {item.name}, </span>
              }
           }):""}
          </p>
        </div>
        </>
     );
}

export default memo(Card);