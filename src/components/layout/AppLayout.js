import { Outlet } from 'react-router-dom';
import Header from '../headers/Header';

const AppLayout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
