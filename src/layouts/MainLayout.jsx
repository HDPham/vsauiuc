import { Outlet } from 'react-router';

const MainLayout = () => (
  <main className="d-flex flex-grow-1 fade-in">
    <Outlet name="main" />
  </main>
);

export default MainLayout;
