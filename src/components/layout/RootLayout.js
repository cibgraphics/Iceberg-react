import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../headers/Header';

const RootLayout = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
        <p>Root Template</p>
      </main>
    </>
  );
};

export default RootLayout;