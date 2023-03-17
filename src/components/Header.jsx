import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import { BsFillGearFill, BsFillHeartbreakFill } from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa';

import { toggleModal } from '../redux/stats/statsSlice';

import styles from '../styles/Header.module.scss';

const Header = ({ isHome }) => {
  const { isModalOpen } = useSelector((state) => state.stats);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(toggleModal());
    if (!isModalOpen) {
      document.body.style.overflowY = 'hidden';
    }
  };

  return (
    <header className={`${styles.header} py-2`}>
      <Container>
        <nav className={styles.header_nav}>
          <NavLink to="/" className={styles.header_link}>
            {isHome && <BsFillHeartbreakFill />}
            {!isHome && <FaChevronLeft />}
          </NavLink>

          <span>Air Pollution Metrics</span>

          <button
            className={styles.header_link}
            type="button"
            title="Select search filter"
            onClick={handleModal}
          >
            <BsFillGearFill className={styles.header_gear} />
          </button>
        </nav>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  isHome: false,
};

Header.propTypes = {
  isHome: PropTypes.bool,
};

export default Header;
