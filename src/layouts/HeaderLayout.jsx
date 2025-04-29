import { Outlet, useLocation } from 'react-router';
import Nav from '../components/Nav';

const HeaderLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header className={pathname === '/' ? 'fixed-top' : 'sticky-top'}>
        <Nav />
      </header>
      <Outlet />
    </>
  );
};
export default HeaderLayout;
