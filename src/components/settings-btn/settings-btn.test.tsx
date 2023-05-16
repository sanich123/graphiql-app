import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { LANG } from '@/utils/languages';
import SettingsBtn from './settings-btn';

describe('Settings-btn', () => {
  afterEach(() => {
    cleanup();
  });

  const setIsPanelOpen = vi.fn();
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <SettingsBtn setIsPanelOpen={setIsPanelOpen} isPanelOpen />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.settings)).toBeDefined();
  });
});
