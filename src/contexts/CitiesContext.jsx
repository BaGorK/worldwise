/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';

const CitiesContext = createContext();

const BASE_URL = 'http://localhost:9000';

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log('There was an error fetching the data: ', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.log('There was an error fetching the data: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

const useCities = () => {
  const ctx = useContext(CitiesContext);
  if (ctx === undefined)
    throw new Error('Cities context was use outside of the cities provider');
  return ctx;
};

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
