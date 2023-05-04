import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LogoutBtn from './logout-btn';

describe('Login-btn', () => {
  it('should correctly renders', () => {
    render(<LogoutBtn />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/logout/i)).toBeDefined();
  });
});
