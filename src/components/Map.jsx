import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h3>
        Position: lat: {lat}, lng: {lng}
      </h3>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 24 }); // we need to pass the whole query string
        }}
      >
        Reset Location
      </button>
    </div>
  );
}

export default Map;
