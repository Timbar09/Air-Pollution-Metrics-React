import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { useSearchParams } from 'react-router-dom';

import { fetchStats } from '../redux/stats/statsSlice';

import StatsList from '../components/stats/StatsList';

const Stats = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  useEffect(() => {
    if (!lat && !lon) throw new Error('Latitude and longitutde unavailable');

    dispatch(fetchStats({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <div>
      <Container>
        <h1>Country Stats</h1>
        <StatsList />
      </Container>
    </div>
  );
};

export default Stats;
