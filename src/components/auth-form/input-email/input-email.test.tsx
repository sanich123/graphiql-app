import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputEmail from './input-email';

describe('InputEmail', () => {
  const setEmail = vi.fn();

  it('should correctly renders', () => {
    render(<InputEmail setStateFn={setEmail} value="asdf" />);
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByPlaceholderText(/e-mail address/i)).toBeDefined();
    expect(screen.getByDisplayValue(/asdf/i)).toBeDefined();
  });
});
