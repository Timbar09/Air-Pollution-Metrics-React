import CountryItem from './countryItem';
import countriesData from '../../countriesArray';

const CountriesList = () => (
  <div>
    <header>
      <h2>Country list</h2>
    </header>

    <ul className="row">
      {countriesData.map((data) => (
        <CountryItem key={data.country} data={data} />
      ))}
    </ul>
  </div>
);
export default CountriesList;
