import Logo from './Logo';
import AppNav from './AppNav';
import styles from './Sidebar.module.css';
import FooterSideBar from './FooterSideBar';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of Cities</p>

      <FooterSideBar />
    </div>
  );
}

export default Sidebar;
