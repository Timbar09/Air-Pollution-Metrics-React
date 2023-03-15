import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = () => (
  <>
    <Header />
    <main className="main">
      <Outlet />
    </main>
  </>
);

export default Layout;
