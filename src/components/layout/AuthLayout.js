import { Outlet } from 'react-router-dom';
import Header from '../headers/Header';
import Login from '../../pages/auth/Login';

const AuthLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
};

export default AuthLayout;