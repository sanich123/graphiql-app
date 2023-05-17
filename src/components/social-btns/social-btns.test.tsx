import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import SocialBtns from './social-btns';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks/hooks';

vi.mock('@/redux/hooks/hooks');
describe('Social btns', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <SocialBtns />
      </Provider>
    );
    ['login with github', 'login with google'].map((socialName) => expect(screen.getByText(new RegExp(socialName, 'i'))).toBeDefined());
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <SocialBtns />
      </Provider>
    );
    ['залогинься с github', 'залогинься с google'].map((socialName) => expect(screen.getByText(new RegExp(socialName, 'i'))).toBeDefined());
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
