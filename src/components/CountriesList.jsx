import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import { CgSearch } from 'react-icons/cg';

import CountryItem from './CountryItem';
import countriesData from '../countriesArray';

import styles from '../styles/CountriesList.module.scss';

const CountriesList = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <header className={`${styles.list_header} py-1`}>
        <Container className={`${styles.list_header_grid} py-1`}>
          <h2>Country list</h2>
          <form>
            <CgSearch className={styles.list_icon} />
            <input
              type="text"
              className={`${styles.list_search} py-1 px-3`}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search countries"
            />
          </form>
        </Container>
      </header>

      <Container>
        <ul className={`${styles.list_content} row`}>
          {countriesData
            .filter((item) =>
              search.toLocaleLowerCase() === ''
                ? item
                : item.country.toLocaleLowerCase().includes(search),
            )
            .map((data) => (
              <CountryItem key={data.country} data={data} />
            ))}
        </ul>
      </Container>
    </div>
  );
};
export default CountriesList;
