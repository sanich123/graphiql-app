import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RegisterBtn from './register-btn';

describe('Register-btn', () => {
  it('should correctly renders', () => {
    render(<RegisterBtn />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/register/i)).toBeDefined();
    expect(screen.getByText(/have an account/i)).toBeDefined();
  });
});
