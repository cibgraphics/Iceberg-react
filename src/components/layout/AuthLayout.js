import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const AuthLayout = (props) => {
  return (
    <>
      <Header />
      <main>
        <p>This is the Login area</p>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;