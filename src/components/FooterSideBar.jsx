import styles from './FooterSideBar.module.css';

function FooterSideBar() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
      </p>
    </footer>
  );
}

export default FooterSideBar;
