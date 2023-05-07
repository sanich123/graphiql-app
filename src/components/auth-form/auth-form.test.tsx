import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { AUTH_PLACES } from '@/utils/const';
import AuthForm from './auth-form';
import { renderWithProviders } from '@/tests/render-with-providers';

describe('Authorization form', () => {
  it('should correctly renders', () => {
    renderWithProviders(<AuthForm place={AUTH_PLACES.login} />);
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    ['E-mail address', 'Password'].map((placeholder) => {
      expect(screen.getByPlaceholderText(new RegExp(`${placeholder}`, 'i'))).toBeDefined();
    });
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/login/i)).toBeDefined();
  });
});
