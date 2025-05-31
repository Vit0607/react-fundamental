import { Outlet } from 'react-router';
import Navbar from '../../components/UI/Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
