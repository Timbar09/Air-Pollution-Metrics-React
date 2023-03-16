import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import { BsFillGearFill } from 'react-icons/bs';

import styles from '../styles/Header.module.scss';

const Header = ({ icon }) => (
  <header className={`${styles.header} py-2`}>
    <Container>
      <nav className={styles.header_nav}>
        <NavLink to="/" className={styles.header_link}>
          {icon}
        </NavLink>

        <span>Air Pollution Metrics</span>

        <BsFillGearFill className={styles.header_gear} />
      </nav>
    </Container>
  </header>
);

Header.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Header;
