import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Header from './header';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks/hooks';
import { useAuthState } from 'react-firebase-hooks/auth';
// import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { LANG } from '@/utils/languages';
import { USER_MOCK } from '@/tests/auth-mocks';
import { User } from 'firebase/auth';

vi.mock('@/redux/hooks/hooks');
vi.mock('react-firebase-hooks/auth');
describe('Header', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAuthState).mockReturnValue([undefined, false, undefined]);
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
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
  it('should correctly renders in russian', () => {
    vi.mocked(useAuthState).mockReturnValue([undefined, false, undefined]);
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru', theme: 'dark' });
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
    [LANG.ru.graphiql, LANG.ru.settings, 'about', LANG.ru.login].map((word) => expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined());
  });

  it('should correctly renders in russian with authorization', () => {
    vi.mocked(useAuthState).mockReturnValue([USER_MOCK as unknown as User, false, undefined]);
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru', theme: 'dark' });
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('navigation')).toBeDefined();
    expect(screen.getByRole('banner')).toBeDefined();
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getAllByRole('link')).toHaveLength(3);
    [LANG.ru.graphiql, LANG.ru.settings, 'about', 'playground', USER_MOCK.email, LANG.ru.logout].map((word) =>
      expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined()
    );
  });

  it('should correctly renders in english with authorization', () => {
    vi.mocked(useAuthState).mockReturnValue([USER_MOCK as unknown as User, false, undefined]);
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en', theme: 'dark' });
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('navigation')).toBeDefined();
    expect(screen.getByRole('banner')).toBeDefined();
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getAllByRole('link')).toHaveLength(3);
    [LANG.en.graphiql, LANG.en.settings, 'about', 'playground', USER_MOCK.email, LANG.en.logout].map((word) =>
      expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined()
    );
  });
});
