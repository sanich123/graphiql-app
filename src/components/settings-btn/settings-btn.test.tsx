import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import { LANG } from '@/constants/languages';
import SettingsBtn from './settings-btn';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');

describe('Settings-btn', () => {
  afterEach(() => cleanup());

  const setIsPanelOpen = vi.fn();
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<SettingsBtn setIsPanelOpen={setIsPanelOpen} isPanelOpen />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.settings)).toBeDefined();
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<SettingsBtn setIsPanelOpen={setIsPanelOpen} isPanelOpen />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.ru.settings)).toBeDefined();
  });
});
