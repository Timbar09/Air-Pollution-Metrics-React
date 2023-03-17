import { useSelector, useDispatch } from 'react-redux';
import { GiCancel } from 'react-icons/gi';
import { toggleModal, filterCountry } from '../redux/stats/statsSlice';

import styles from '../styles/Modal.module.scss';

const Modal = () => {
  const { isModalOpen } = useSelector((state) => state.stats);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(toggleModal());
    if (isModalOpen) {
      document.body.style.overflowY = 'auto';
    }
  };

  if (isModalOpen) {
    return (
      <div className={styles.overlay}>
        <form className={styles.modal}>
          <div className={styles.modal_cancel}>
            <button type="button" onClick={() => handleModal()}>
              <GiCancel />
            </button>
          </div>
          <fieldset>
            <legend>
              <span>Search by:</span>
            </legend>
            <label htmlFor="country">
              <input
                type="radio"
                id="country"
                name="search_option"
                onChange={(e) => dispatch(filterCountry(e.target.value))}
              />
              Country
            </label>

            <label htmlFor="capital">
              <input
                type="radio"
                id="capital"
                name="search_option"
                value=""
                onChange={(e) => dispatch(filterCountry(e.target.value))}
              />
              Capital
            </label>
          </fieldset>
        </form>
      </div>
    );
  }

  return '';
};

export default Modal;
