import { NavLink } from 'react-router-dom';

function PageNave() {
  return (
    <nav>
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
