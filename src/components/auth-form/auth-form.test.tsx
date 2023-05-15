import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { AUTH_PLACES } from '@/utils/const';
import AuthForm from './auth-form';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

describe('Authorization form', () => {
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
});
