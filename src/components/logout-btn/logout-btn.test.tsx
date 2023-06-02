import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import LogoutBtn from './logout-btn';
import { LANG } from '@/constants/languages';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');

describe('Logout btn', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<LogoutBtn />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.logout)).toBeDefined();
  });
  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<LogoutBtn />);
    expect(screen.getByText(LANG.ru.logout)).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });
});
