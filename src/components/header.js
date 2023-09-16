import React from 'react';
import Search from './search';
import Hamburger from './hamburger';

const Header = ({handledata})=> {
    return ( 
        <>
        <header className="header">
          <div className='logo-wrapper'>
            <img src='/Logo.png' alt='logo'/>
          </div>
          <Search handledata={handledata} />
          <div className='nav'>
          <a href='#' className='link'>SIgn in</a>
          <Hamburger/>
          </div>
        </header>
        </>
     );
}

export default Header;