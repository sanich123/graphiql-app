import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import { LANG } from '@/utils/languages';
import SettingsPanel from './settings-panel';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');
describe('Settings panel', () => {
  afterEach(() => cleanup());

  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<SettingsPanel />);
    expect(screen.getAllByRole('button')).toHaveLength(4);
    [LANG.en.light, LANG.en.dark, LANG.en.en, LANG.en.ru].map((word) => expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined());
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<SettingsPanel />);
    expect(screen.getAllByRole('button')).toHaveLength(4);
    [LANG.ru.light, LANG.ru.dark, LANG.ru.en, LANG.ru.ru].map((word) => expect(screen.getByText(new RegExp(word, 'i'))).toBeDefined());
  });
});
