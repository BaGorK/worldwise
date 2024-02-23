/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCities } from '../contexts/CitiesContext';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity } = useCities();
  console.log(currentCity);

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles['cityItem--active'] : ''
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{cityName}</span>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
