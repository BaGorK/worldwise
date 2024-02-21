import { NavLink } from 'react-router-dom';
import styles from './PageNave.module.css';

function PageNave() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>home</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>pricings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNave;
