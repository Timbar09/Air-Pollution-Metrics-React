import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FiArrowRightCircle } from 'react-icons/fi';

import styles from '../styles/CountryItem.module.scss';

const CountryItem = ({ data }) => {
  const flag = data.country.toLowerCase().replace(/ /g, '-');

  return (
    <li className={`${styles.item} col-6`}>
      <Link
        to={`/stats?lat=${data.latitude}&lon=${data.longitude}`}
        style={{ width: '100%' }}
        className={`${styles.item_content} p-1`}
      >
        <div className={styles.item_bottom}>
          <h3 className={styles.item_country}>{data.country}</h3>
          <p className={styles.item_capital}>{data.capital}</p>
        </div>

        <div className={styles.item_mid}>
          <img className={styles.item_img} src={`flags/${flag}.png`} alt="" />
        </div>
        <div className={styles.item_top}>
          <div className={styles.item_coods}>
            <span>{`Lat: ${data.latitude}`}</span>
            <span>{`Lon: ${data.longitude}`}</span>
          </div>
          <FiArrowRightCircle />
        </div>
      </Link>
    </li>
  );
};

CountryItem.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryItem;
