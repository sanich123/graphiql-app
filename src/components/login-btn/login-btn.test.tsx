import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginBtn from './login-btn';
import { useAppSelector } from '@/redux/hooks/hooks';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LANG } from '@/utils/languages';
import { USER_MOCK } from '@/tests/auth-mocks';
vi.mock('@/redux/hooks/hooks');
vi.mock('react-firebase-hooks/auth');

describe('Authorization form', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders', () => {
    vi.mocked(useAuthState).mockReturnValue([USER_MOCK, false, { name: 'name', message: 'message' }]);
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <LoginBtn />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    screen.debug();
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.login)).toBeDefined();
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <LoginBtn />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.ru.login)).toBeDefined();
  });
  it('should correctly renders with authorized user', () => {});
});
