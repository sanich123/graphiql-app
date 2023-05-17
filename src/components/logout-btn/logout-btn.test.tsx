import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LogoutBtn from './logout-btn';
import { LANG } from '@/utils/languages';
import { useAppSelector } from '@/redux/hooks/hooks';

vi.mock('@/redux/hooks/hooks');

describe('Logout btn', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <LogoutBtn />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.logout)).toBeDefined();
  });
  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <LogoutBtn />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByText(LANG.ru.logout)).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });
});
