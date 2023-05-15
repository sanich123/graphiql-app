import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthNavigateBtns from './auth-navigate-btns';
import { AUTH_PLACES } from '@/utils/const';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

describe('Authorization btns', () => {
  afterEach(() => {
    cleanup();
  });

  it('should correctly renders', () => {
    const setPlace = vi.fn();
    render(
      <Provider store={store}>
        <AuthNavigateBtns place={AUTH_PLACES.login} setPlace={setPlace} />
      </Provider>
    );
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByText(/register/i)).toBeDefined();
    expect(screen.getByText(/Have an account\?/)).toBeDefined();
  });
  it('should correclty render register button', async () => {
    const setPlace = vi.fn();
    render(
      <Provider store={store}>
        <AuthNavigateBtns place={AUTH_PLACES.reset} setPlace={setPlace} />
      </Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(screen.getByText(/don't have an account/i)).toBeDefined();
    expect(screen.getByText(/register/i)).toBeDefined();
    await userEvent.click(button);
    expect(setPlace).toHaveBeenCalledOnce();
  });
  it('should correclty render register button', async () => {
    const setPlace = vi.fn();
    render(
      <Provider store={store}>
        <AuthNavigateBtns place={AUTH_PLACES.register} setPlace={setPlace} />
      </Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(screen.getByText(/have an account/i)).toBeDefined();
    expect(screen.getByText(/login/i)).toBeDefined();
    await userEvent.click(button);
    expect(setPlace).toHaveBeenCalledOnce();
  });
});
