import React from 'react';
import MainNav from './MainNav';
import UserNav from './UserNav';

const Header = ({ isLoggedIn }) => {

  return (
    <header className="app-header container">
      <div className='content'>
        <div className="logo">
          <img src="/assets/images/logos/main-logo.svg" alt="Iceberg" />
        </div>
        <MainNav />
        <UserNav isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn prop */}
      </div>
    </header>
  )
}

export default Header;