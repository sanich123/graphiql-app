import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AuthNavigateBtns from './auth-navigate-btns';
import { AUTH_PLACES } from '@/utils/const';

describe('Authorization btns', () => {
  const setPlace = vi.fn();
  it('should correctly renders', () => {
    render(<AuthNavigateBtns place={AUTH_PLACES.login} setPlace={setPlace} />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByText(/register/i)).toBeDefined();
    expect(screen.getByText(/Have an account\?/)).toBeDefined();
  });
});
