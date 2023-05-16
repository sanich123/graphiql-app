import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { AUTH_PLACES } from '@/utils/const';
import AuthForm from './auth-form';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('Authorization form', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <AuthForm place={AUTH_PLACES.login} />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    ['E-mail address', 'Password'].map((placeholder) => {
      expect(screen.getByPlaceholderText(new RegExp(`${placeholder}`, 'i'))).toBeDefined();
    });
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/login/i)).toBeDefined();
  });
  it('should correctly interract with the user', async () => {
    render(
      <Provider store={store}>
        <AuthForm place={AUTH_PLACES.login} />
      </Provider>
    );
    const emailInput = screen.getByPlaceholderText(/e-mail address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    await userEvent.type(emailInput, 'I love pizza');
    await userEvent.type(passwordInput, 'Сорок тысяч обезьян в жопу сунули банан');
    expect(screen.getByDisplayValue(/i love pizza/i)).toBeDefined();
    expect(screen.getByDisplayValue(/сорок тысяч обезьян в жопу сунули банан/i)).toBeDefined();
  });
  it('should correctly change login btn to register', () => {
    render(
      <Provider store={store}>
        <AuthForm place={AUTH_PLACES.register} />
      </Provider>
    );
    ['Full name', 'E-mail address', 'Password'].map((placeholder) => expect(screen.getByPlaceholderText(new RegExp(placeholder, 'i'))).toBeDefined());
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/register/i)).toBeDefined();
  });
  it('should correctly change login btn to reset', () => {
    render(
      <Provider store={store}>
        <AuthForm place={AUTH_PLACES.reset} />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/e-mail address/i)).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/reset/i)).toBeDefined();
  });
});
