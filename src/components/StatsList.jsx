import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import StatsItem from './StatsItem';

import { fetchStats } from '../redux/stats/statsSlice';

import styles from '../styles/StatsList.module.scss';

const StatsList = () => {
  const { stats, country, capital, isLoading } = useSelector((state) => state.stats);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  useEffect(() => {
    if (!lat && !lon) throw new Error('Latitude and longitutde unavailable');

    dispatch(fetchStats({ lat, lon }));
  }, [dispatch, lat, lon]);

  if (isLoading) {
    return (
      <div className={`${styles.loading} container padding`}>
        <div className={styles.spinner}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className={`${styles.list_header} py-1`}>
        <Container className={`${styles.list_header_grid} py-1`}>
          <h2>
            {`${country}/ `}
            <span>{`${capital} air pollution stats`}</span>
          </h2>
        </Container>
      </header>

      <ul>
        {stats.map((stat) => (
          <StatsItem key={stat.name} stat={stat} />
        ))}
      </ul>
    </div>
  );
};

export default StatsList;
