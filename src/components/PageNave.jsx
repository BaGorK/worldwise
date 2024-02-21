import { NavLink } from 'react-router-dom';

import Logo from './Logo';
import styles from './PageNave.module.css';

function PageNave() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/product'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>pricings</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNave;
