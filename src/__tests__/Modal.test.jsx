import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Modal from '../components/Modal';
import store from '../redux/store';

describe('Modal tests', () => {
  test('should render Modal', () => {
    const modal = render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal />
        </BrowserRouter>
      </Provider>,
    );

    expect(modal).toMatchSnapshot();
  });
});
