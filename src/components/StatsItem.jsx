import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import { FiArrowRightCircle } from 'react-icons/fi';

import styles from '../styles/StatsItem.module.scss';

const StatsItem = ({ stat }) => (
  <li className={styles.statItem}>
    <Container className={styles.statItem_grid}>
      <h3 className={styles.statItem_component}>{stat.name}</h3>
      <span className={`${styles.statItem_grid} ${styles.statItem_value_grid}`}>
        <span>
          <span className={styles.statItem_value}>{stat.value}</span>
          <span> μg/m3</span>
        </span>
        <FiArrowRightCircle />
      </span>
    </Container>
  </li>
);

StatsItem.propTypes = {
  stat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default StatsItem;
