import React from 'react'
import Home  from '../assets/images/Home.png'
import Movie  from '../assets/images/Movie.png'
import series  from '../assets/images/Tvshow.png'
import Upcoming from '../assets/images/Calendar.png'
import logout from '../assets/images/Logout.png'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-logo-wrapper'>
            <img className='sidebar-logo' src="/sidebarLogo.png" alt='side bar logo'/>
        </div>
        <div className='sidebar-links'>
            <a href='#' className='sidebar-link'>
                <img className='link-img' src={Home} alt='sidebare link'/>
                <span>
                    Home
                </span>
            </a>
            <a href='#' className='sidebar-link'>
                <img className='link-img' src={Movie} alt='sidebare link'/>
                <span>
                    Movies
                </span>
            </a>
            <a href='#' className='sidebar-link'>
                <img className='link-img' src={series} alt='sidebare link'/>
                <span>
                    Tv series
                </span>
            </a>
            <a href='#' className='sidebar-link'>
                <img className='link-img' src={Upcoming} alt='sidebare link'/>
                <span>
                    Upcoming
                </span>
            </a>
            <div className='call-action'>
                <h4 className='action-heading'>
                Play movie quizes and earn free tickets
                </h4>
                <p className='action-text'>
                50k people are playing now
                </p>
                <div className ='action-btn-wrapper'>
                <button className='action-btn'>
                Start playing   
                </button>
                </div>
            </div>
            <button className='sidebar-btn '>
                <img className='sidebar-logout' src={logout} alt='sidebar logo'/>
                <span>Log out</span>
            </button>
        </div>
    </div>
  )
}
