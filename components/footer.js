import React from 'react';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import youtube from '../assets/images/facebook.png';

const Footer = ()=> {
    return ( 
        <>
        <footer className="footer">
          <div className='socials'>
            <a href='#' className='social-links'><img src={facebook} alt='social-icon' className='social-icon'/></a>
            <a href='#' className='social-links'><img src={instagram} alt='social-icon' className='social-icon'/></a>
            <a href='#' className='social-links'><img src={twitter} alt='social-icon' className='social-icon'/></a>
            <a  href='#' className='social-links'><img src={youtube} alt='social-icon' className='social-icon'/></a>
          </div>
          <div className='quick-links'>
            <a href='#' className='footer-link'>Conditions of Use</a>
            <a href='#' className='footer-link'>Privacy & Policy</a>
            <a href='#' className='footer-link'>Press Room</a>
          </div>
          <div className='copywrite'>
            &copy; 2021 MovieBox by Adriana Eka Prayudha  
          </div>
        </footer>
        </>
     );
}

export default Footer;