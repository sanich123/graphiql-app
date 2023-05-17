import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import { LANG } from '@/utils/languages';
import Tabs from './tabs';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');
describe('Settings panel', () => {
  afterEach(() => cleanup());

  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<Tabs />);
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getByRole('heading', { name: 'Functionality' })).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('button', { name: 'Get Started!' })).toBeDefined();
    LANG.en.tabs.map((tab) => expect(screen.getByText(tab)).toBeDefined());
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<Tabs />);
    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getByRole('heading', { name: 'Functionality' })).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('button', { name: LANG.ru.main.startBtn })).toBeDefined();
    LANG.ru.tabs.map((tab) => expect(screen.getByText(tab)).toBeDefined());
  });
});
