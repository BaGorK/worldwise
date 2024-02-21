/* eslint-disable react/prop-types */
import Spinner from './Spinner';
import Message from './Message';

import styles from './CountryList.module.css';
import CountryItem from './CountryItem';

function CountryList({ cities, isLoading }) {
  //   const countries = [...new Set(cities.map((city) => city.country))]; // list of country
  const countries = cities.reduce((acc, city) => {
    if (acc.find((ctry) => ctry.country === city.country)) return acc;
    else return [...acc, { country: city.country, emoji: city.emoji }];
  }, []);

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
