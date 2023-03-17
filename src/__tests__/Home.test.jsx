import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../routes/Home';
import store from '../redux/store';

describe('Home tests', () => {
  test('should render Home page', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(home).toMatchSnapshot();
  });
});
