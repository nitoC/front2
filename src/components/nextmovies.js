import React from 'react'
import star from '../assets/images/Star.png'
import list from '../assets/images/Listnext.png'
import TwoTickets from '../assets/images/TwoTickets.png'

const Nextmovies = ({nextM}) => {

    function simplifyNumber(number) {
        let num =number
        if (num < 1000) {
          return num.toString(); // No conversion needed for numbers less than 1000
        } else if (num < 10000) {
          // Convert to 1 decimal place with "k" suffix
          return (num / 1000).toFixed(1) + "k";
        } else {
          // Convert to 2 decimal places with "k" suffix
          return (num / 1000).toFixed(2) + "k";
        }
      }
  return (
    <div className='next-wrapper'>
       <div className='next-star'>
            <img className='star icon' src={star} alt='star icon'/>
            <p classsName='next-star-details'>{nextM?nextM.vote_average.toFixed(1):''} | {nextM?simplifyNumber(nextM.vote_count):''}</p>
       </div>
       <div className='next-showtimes'>
        <button className='showtimes-btn'>
        <img className='star icon' src={TwoTickets} alt='star icon'/>
        <span>See Showtimes</span>
        </button>
       </div>
       <div className='morewatch'>
       <button className='morewatch-btn'>
        <img className='star icon' src={list} alt='star icon'/>
        <span>more watch options</span>
        </button>
       </div>
       <div className='next-shows'>
        <div className='next-text'>
            <img className='next-icon' src={list} alt='next icon'/>
            <span>The Best Movies and Shows in September</span>
        </div>
       </div>
    </div>
  )
}

export default Nextmovies