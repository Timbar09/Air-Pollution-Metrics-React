import { NavLink } from 'react-router-dom';

import countriesData from '../../countriesArray';

const CountriesList = () => (
  <div>
    <header>
      <h2>Country list</h2>
    </header>

    <ul className="row">
      {countriesData.map((data) => (
        <li key={data.country} className="col-3 p-1 mb-2">
          <NavLink style={{ width: '100%' }} className=" p-2 border" to="/stats">
            <h3>{data.country}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default CountriesList;
