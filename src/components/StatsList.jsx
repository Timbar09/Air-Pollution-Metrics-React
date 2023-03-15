import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import StatsItem from './StatsItem';

import { fetchStats } from '../redux/stats/statsSlice';

const StatsList = () => {
  const { stats } = useSelector((state) => state.stats);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  useEffect(() => {
    if (!lat && !lon) throw new Error('Latitude and longitutde unavailable');

    dispatch(fetchStats({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <ul>
      {stats.map((stat) => (
        <StatsItem key={stat.name} stat={stat} />
      ))}
    </ul>
  );
};

export default StatsList;
