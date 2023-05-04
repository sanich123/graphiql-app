import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ToLoginBtn from './to-login-btn';

describe('To-login-btn', () => {
  const setIsResetOpen = vi.fn();
  const setIsRegisterOpen = vi.fn();
  it('should correctly renders', () => {
    render(<ToLoginBtn setIsResetOpen={setIsResetOpen} setIsRegisterOpen={setIsRegisterOpen} />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/have an account/i)).toBeDefined();
    expect(screen.getByText(/login/i)).toBeDefined();
  });
});
