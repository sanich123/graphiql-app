import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import LogoutBtn from './logout-btn';
import { renderWithProviders } from '@/tests/render-with-providers';

describe('Logout-btn', () => {
  it('should correctly renders', () => {
    renderWithProviders(<LogoutBtn />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/logout/i)).toBeDefined();
  });
});
