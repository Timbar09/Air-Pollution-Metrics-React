import { Outlet } from 'react-router-dom';
import Modal from './Modal';

const Layout = () => (
  <main className="layout">
    <Modal />
    <Outlet />
  </main>
);

export default Layout;
