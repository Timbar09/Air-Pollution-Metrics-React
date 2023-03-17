import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Stats from '../routes/Stats';
import store from '../redux/store';

describe('Stats tests', () => {
  test('should render Stats page', () => {
    const stats = render(
      <Provider store={store}>
        <BrowserRouter>
          <Stats />
        </BrowserRouter>
      </Provider>,
    );

    expect(stats).toMatchSnapshot();
  });
});
