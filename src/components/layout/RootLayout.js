import { Outlet } from 'react-router-dom';
import Header from '../headers/Header';

const RootLayout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <p>Root Template</p>
      </main>
    </>
  );
};

export default RootLayout;