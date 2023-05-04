import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputPassword from './input-password';

describe('InputPassword', () => {
  const setPassword = vi.fn();

  it('should correctly renders', () => {
    render(<InputPassword setStateFn={setPassword} value="1234" />);
    expect(screen.getByPlaceholderText(/password/i)).toBeDefined();
    expect(screen.getByDisplayValue(/1234/i)).toBeDefined();
  });
});
