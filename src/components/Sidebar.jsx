import { Outlet } from 'react-router-dom';

import Logo from './Logo';
import AppNav from './AppNav';
import styles from './Sidebar.module.css';
import FooterSideBar from './FooterSideBar';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <FooterSideBar />
    </div>
  );
}

export default Sidebar;
