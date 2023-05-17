import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { LANG } from '@/utils/languages';
import SettingsPanel from './settings-panel';
import { useAppSelector } from '@/redux/hooks/hooks';

vi.mock('@/redux/hooks/hooks');
describe('Settings panel', () => {
  afterEach(() => cleanup());

  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <SettingsPanel />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getAllByRole('button')).toHaveLength(4);
    [LANG.en.light, LANG.en.dark, LANG.en.en, LANG.en.ru].map((word) => expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined());
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <SettingsPanel />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getAllByRole('button')).toHaveLength(4);
    [LANG.ru.light, LANG.ru.dark, LANG.ru.en, LANG.ru.ru].map((word) => expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined());
  });
});
