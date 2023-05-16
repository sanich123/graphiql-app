import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Logo from './logo';
import { LANG } from '@/utils/languages';

describe('Login button', () => {
  afterEach(() => cleanup());
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <Logo place="header" />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByText(LANG.en.graphiql)).toBeDefined();
  });
});
