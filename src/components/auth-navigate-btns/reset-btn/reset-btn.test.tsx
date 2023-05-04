import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResetBtn from './reset-btn';

describe('Reset-btn', () => {
  const setIsResetOpen = vi.fn();
  it('should correctly renders', () => {
    render(<ResetBtn setIsResetOpen={setIsResetOpen} />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/forgot the password/i)).toBeDefined();
    expect(screen.getByText(/reset/i)).toBeDefined();
  });
});
