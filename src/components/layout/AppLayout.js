import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../headers/Header';

const AppLayout = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
