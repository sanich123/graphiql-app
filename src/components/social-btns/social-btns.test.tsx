import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import SocialBtns from './social-btns';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');
describe('Social btns', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<SocialBtns />);
    ['login with github', 'login with google'].map((socialName) => expect(screen.getByText(new RegExp(socialName, 'i'))).toBeDefined());
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<SocialBtns />);
    ['залогинься с github', 'залогинься с google'].map((socialName) => expect(screen.getByText(new RegExp(socialName, 'i'))).toBeDefined());
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
