import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { useAppSelector } from '@/redux/hooks/hooks';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Logo from './logo';
import { LANG } from '@/utils/languages';
vi.mock('@/redux/hooks/hooks');
describe('Login button', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <Logo place="header" />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByText(LANG.en.graphiql)).toBeDefined();
  });
  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <Logo place="header" />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByText(LANG.ru.graphiql)).toBeDefined();
  });
});
