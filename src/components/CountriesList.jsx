import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import CountryItem from './CountryItem';
import countriesData from '../countriesArray';

const CountriesList = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <header>
        <h2>Country list</h2>
        <Form>
          <InputGroup>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search countries"
            />
          </InputGroup>
        </Form>
      </header>

      <ul className="row">
        {countriesData
          .filter((item) => (search.toLocaleLowerCase() === ''
            ? item
            : item.country.toLocaleLowerCase().includes(search)))
          .map((data) => (
            <CountryItem key={data.country} data={data} />
          ))}
      </ul>
    </div>
  );
};
export default CountriesList;
