import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import BtnTry from './btn-try';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Authorization form', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <BtnTry place="main" />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/get started/i)).toBeDefined();
  });
});
