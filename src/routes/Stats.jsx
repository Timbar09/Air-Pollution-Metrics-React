import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import StatsList from '../components/StatsList';

const Stats = () => (
  <div>
    <nav>
      <Container>
        <NavLink to="/">Go back Home</NavLink>
      </Container>
    </nav>

    <Container>
      <h1>Country Stats</h1>
      <StatsList />
    </Container>
  </div>
);

export default Stats;
