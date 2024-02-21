import { NavLink } from 'react-router-dom';
import PageNave from '../components/PageNave';

function Homepage() {
  return (
    <div>
      <PageNave />
      <h1>Home Page </h1>
      <p>WorldWise</p>
      <NavLink to='/app'>Go to App</NavLink>
    </div>
  );
}

export default Homepage;
