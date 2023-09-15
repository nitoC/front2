import React from "react";
import Expandarrow from '../assets/images/ExpandArrow.png'

const movieDetails = ({ details }) => {
console.log(details, 'details')
  const minutesToHoursAndMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  };
  return (
    <div className="movie-details">
      <div className="details-heading-wrapper">
        
        <h1 className="details-heading">
          {details?details.title:''}  •  {details&&details.release_date?details.release_date.split("-")[0]:''}  •  PG-13  •  {details&&details.runtime?minutesToHoursAndMinutes(details.runtime):''}
        </h1>
        <div className="details-genre">
        {details&&details.genres?details.genres.map((item,key)=>{
         
         if(details.genres.indexOf(item)===details.genres.length - 1){
          return <span key={key} > {"  "}  {item.name}</span>
         }else{
            return <span> {item.name} </span>
          }
      }):""}
        </div>
      </div>
      <div className="details-text-wrapper">
        <p className="details-text">
            {details.overview}
        </p>
      </div>
      <div className="movie-org">
        <p className="director">Director : <span> Adam fillspoon</span></p> 
        <p className="writer">Writers : <span>Jim Cash, Jack Epps Jr,  Peter Craig</span></p> 
        <p className="stars">Stars : <span>Kevin Nash, leonardo gnaski, Roben stillmore </span></p> 
      </div>
      <div className="details-action">
        <button className="details-btn">
       Top rated movie #65
        </button>
        <div className="action-extra">
        <span className="details-action-text">Awards 9 nominations</span>
        <span className="details-action-icon"><img src={Expandarrow} className="details-action-icon" alt="details action icon"/> </span>

        </div>
      </div>
    </div>
  );
};

export default movieDetails;
