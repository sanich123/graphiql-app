import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AuthNavigateBtns from './auth-navigate-btns';

describe('To-login-btn', () => {
  const setIsResetOpen = vi.fn();
  const setIsRegisterOpen = vi.fn();
  it('should correctly renders', () => {
    render(<AuthNavigateBtns isResetOpen isRegisterOpen={false} setIsResetOpen={setIsResetOpen} setIsRegisterOpen={setIsRegisterOpen} />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/register/i)).toBeDefined();
    expect(screen.getByText(/have an account/i)).toBeDefined();
  });
});
