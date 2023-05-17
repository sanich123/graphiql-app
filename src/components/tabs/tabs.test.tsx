import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { LANG } from '@/utils/languages';
import Tabs from './tabs';
import { useAppSelector } from '@/redux/hooks/hooks';

vi.mock('@/redux/hooks/hooks');
describe('Settings panel', () => {
  afterEach(() => cleanup());

  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <Tabs />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getByRole('heading', { name: 'Functionality' })).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('button', { name: 'Get Started!' })).toBeDefined();
    LANG.en.tabs.map((tab) => expect(screen.getByText(tab)).toBeDefined());
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <Tabs />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getByRole('heading', { name: 'Functionality' })).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('button', { name: LANG.ru.main.startBtn })).toBeDefined();
    LANG.ru.tabs.map((tab) => expect(screen.getByText(tab)).toBeDefined());
  });
});
