import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronLeft } from 'react-icons/fa';

import Header from '../components/Header';
import StatsList from '../components/StatsList';

import styles from '../styles/Stats.module.scss';

const Stats = () => {
  const { country, capital } = useSelector((state) => state.stats);
  const flag = country.toLowerCase().replace(/ /g, '-');

  return (
    <>
      <Header icon={<FaChevronLeft />} />

      <Container className={styles.hero_container}>
        <Row className={styles.hero}>
          <Col>
            <img className={styles.hero_img} src={`flags/${flag}.png`} alt="Flag" />
          </Col>
          <Col className={styles.hero_title}>
            <div>
              <h1>{country}</h1>
              <span>{capital}</span>
            </div>
          </Col>
        </Row>
      </Container>

      <StatsList />
    </>
  );
};

export default Stats;
