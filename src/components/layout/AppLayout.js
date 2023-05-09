import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const AppLayout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <p>This is the main App</p>
      </main>
    </>
  );
};

export default AppLayout;
