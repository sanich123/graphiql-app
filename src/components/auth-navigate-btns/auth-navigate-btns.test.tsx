import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthNavigateBtns from './auth-navigate-btns';
import { AUTH_NAV_BTNS_TEXT, AUTH_PLACES, AUTH_PLACES_RU } from '@/utils/const';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');

describe('Authorization btns', () => {
  afterEach(() => cleanup());

  it('should correctly renders initial values in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    const setPlace = vi.fn();
    customRender(<AuthNavigateBtns place={AUTH_PLACES.login} setPlace={setPlace} />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    AUTH_NAV_BTNS_TEXT.en.map(({ phrase, btnText }) => {
      expect(screen.getByText(btnText)).toBeDefined();
      expect(screen.getByText(phrase)).toBeDefined();
    });
  });

  it('should correctly renders initial values in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    const setPlace = vi.fn();
    customRender(<AuthNavigateBtns place={AUTH_PLACES.login} setPlace={setPlace} />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    AUTH_NAV_BTNS_TEXT.ru.map(({ phrase, btnText }) => {
      expect(screen.getByText(btnText)).toBeDefined();
      expect(screen.getByText(phrase)).toBeDefined();
    });
  });

  it('should correclty render register button in english', async () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    const setPlace = vi.fn();
    customRender(<AuthNavigateBtns place={AUTH_PLACES.reset} setPlace={setPlace} />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(screen.getByText(/don't have an account/i)).toBeDefined();
    expect(screen.getByText(/register/i)).toBeDefined();
    await userEvent.click(button);
    expect(setPlace).toHaveBeenCalledOnce();
  });

  it('should correctly renders register button in russian', async () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    const setPlace = vi.fn();
    customRender(<AuthNavigateBtns place={AUTH_PLACES.reset} setPlace={setPlace} />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(screen.getByText(/нет аккаунта?/i)).toBeDefined();
    expect(screen.getByText(AUTH_PLACES_RU.register)).toBeDefined();
    await userEvent.click(button);
    expect(setPlace).toHaveBeenCalledOnce();
  });
  it('should correclty render login button in english', async () => {
    const setPlace = vi.fn();
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<AuthNavigateBtns place={AUTH_PLACES.register} setPlace={setPlace} />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(screen.getByText(AUTH_NAV_BTNS_TEXT.en[2].phrase)).toBeDefined();
    expect(screen.getByText(AUTH_PLACES.login)).toBeDefined();
    await userEvent.click(button);
    expect(setPlace).toHaveBeenCalledOnce();
  });

  it('should correclty render login button in russian', async () => {
    const setPlace = vi.fn();
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<AuthNavigateBtns place={AUTH_PLACES.register} setPlace={setPlace} />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(screen.getByText(AUTH_NAV_BTNS_TEXT.ru[2].phrase)).toBeDefined();
    expect(screen.getByText(AUTH_PLACES_RU.login)).toBeDefined();
    await userEvent.click(button);
    expect(setPlace).toHaveBeenCalledOnce();
  });
});
