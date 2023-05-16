import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { LANG } from '@/utils/languages';
import SettingsPanel from './settings-panel';

describe('Settings panel', () => {
  afterEach(() => {
    cleanup();
  });

  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <SettingsPanel />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getAllByRole('button')).toHaveLength(4);
    [LANG.en.light, LANG.en.dark, LANG.en.en, LANG.en.ru].map((word) => expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined());
  });
});
