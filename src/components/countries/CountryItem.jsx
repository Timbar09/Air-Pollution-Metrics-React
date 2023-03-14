import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CountryItem = ({ data }) => (
  <li className="col-3 p-1 mb-2">
    <NavLink style={{ width: '100%' }} className=" p-2 border" to="/stats">
      <h3>{data.country}</h3>
      <p>{data.capital}</p>
      <span>{`Lat: ${data.latitude}`}</span>
      <span>{`Lon: ${data.longitude}`}</span>
    </NavLink>
  </li>
);

CountryItem.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryItem;
