import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginBtn from './login-btn';

describe('Authorization form', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <LoginBtn />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/sign-in/i)).toBeDefined();
  });
});
