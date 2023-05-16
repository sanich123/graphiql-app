import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LogoutBtn from './logout-btn';
import { LANG } from '@/utils/languages';

describe('Logout btn', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <LogoutBtn />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.logout)).toBeDefined();
  });
});
