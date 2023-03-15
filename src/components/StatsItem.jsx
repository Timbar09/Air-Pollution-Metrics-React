import PropTypes from 'prop-types';

const StatsItem = ({ stat }) => (
  <li>
    <span>{stat.name}</span>
    <span>{stat.value}</span>
  </li>
);

StatsItem.propTypes = {
  stat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default StatsItem;
