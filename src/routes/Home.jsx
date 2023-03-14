import Container from 'react-bootstrap/Container';

import CountriesList from '../components/countries/CountriesList';

const Home = () => (
  <div>
    <Container>
      <h1>Home</h1>
      <CountriesList />
    </Container>
  </div>
);
export default Home;
