import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import { AUTH_PLACES } from '@/utils/const';
import AuthForm from './auth-form';
import userEvent from '@testing-library/user-event';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');

describe('Authorization form', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<AuthForm place={AUTH_PLACES.login} />);
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    ['E-mail address', 'Password'].map((placeholder) => {
      expect(screen.getByPlaceholderText(new RegExp(`${placeholder}`, 'i'))).toBeDefined();
    });
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/login/i)).toBeDefined();
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<AuthForm place={AUTH_PLACES.login} />);
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    ['Электропочта', 'Пароль'].map((placeholder) => expect(screen.getByPlaceholderText(new RegExp(`${placeholder}`, 'i'))).toBeDefined());
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/логин/i)).toBeDefined();
  });
  it('should correctly interract with the user in english', async () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<AuthForm place={AUTH_PLACES.login} />);
    const emailInput = screen.getByPlaceholderText(/e-mail address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await userEvent.type(emailInput, 'I love pizza');
    await userEvent.type(passwordInput, 'Сорок тысяч обезьян в жопу сунули банан');
    expect(screen.getByDisplayValue(/i love pizza/i)).toBeDefined();
    expect(screen.getByDisplayValue(/сорок тысяч обезьян в жопу сунули банан/i)).toBeDefined();
  });

  it('should correctly interract with the user in russian', async () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<AuthForm place={AUTH_PLACES.login} />);
    const emailInput = screen.getByPlaceholderText(/электропочта/i);
    const passwordInput = screen.getByPlaceholderText(/пароль/i);
    await userEvent.type(emailInput, 'I love pizza');
    await userEvent.type(passwordInput, 'Сорок тысяч обезьян в жопу сунули банан');
    expect(screen.getByDisplayValue(/i love pizza/i)).toBeDefined();
    expect(screen.getByDisplayValue(/сорок тысяч обезьян в жопу сунули банан/i)).toBeDefined();
  });
  it('should correctly change login btn to register in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<AuthForm place={AUTH_PLACES.register} />);
    ['Full name', 'E-mail address', 'Password'].map((placeholder) => expect(screen.getByPlaceholderText(new RegExp(placeholder, 'i'))).toBeDefined());
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/register/i)).toBeDefined();
  });

  it('should correctly change login btn to register in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<AuthForm place={AUTH_PLACES.register} />);
    ['Имя', 'Электропочта', 'Пароль'].map((placeholder) => expect(screen.getByPlaceholderText(new RegExp(placeholder, 'i'))).toBeDefined());
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/регистрация/i)).toBeDefined();
  });
  it('should correctly change login btn to reset in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<AuthForm place={AUTH_PLACES.reset} />);
    expect(screen.getByPlaceholderText(/e-mail address/i)).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/reset/i)).toBeDefined();
  });

  it('should correctly change login btn to reset in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<AuthForm place={AUTH_PLACES.reset} />);
    expect(screen.getByPlaceholderText(/электропочта/i)).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button', { name: 'Сброс' })).toBeDefined();
  });
});
