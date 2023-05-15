import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Header from './header';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
// import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Header', () => {
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
  });
});
