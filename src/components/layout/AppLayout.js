import { Outlet } from 'react-router-dom';
import MainNav from '../header/MainNav';

const AppLayout = (props) => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
        <p>After Outlet</p>
      </main>
    </>
  );
};

export default AppLayout;
