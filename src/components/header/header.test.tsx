import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Header from './header';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
// import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Header', () => {
  it('should correctly renders', () => {
    afterEach(() => {
      cleanup();
    });
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('navigation')).toBeDefined();
    expect(screen.getByRole('banner')).toBeDefined();
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getByRole('listitem')).toBeDefined();
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getAllByRole('link')).toHaveLength(2);
    ['about', 'settings', 'sign-in'].map((word) => expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined());
  });
});
