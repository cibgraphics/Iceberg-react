import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const AppLayout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <p>After Outlet</p>
      </main>
    </>
  );
};

export default AppLayout;
