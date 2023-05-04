import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginBtn from './login-btn';

describe('Login-btn', () => {
  it('should correctly renders', () => {
    render(<LoginBtn />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/login/i)).toBeDefined();
  });
});
