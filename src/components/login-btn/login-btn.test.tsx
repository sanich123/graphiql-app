import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import LoginBtn from './login-btn';
import { useAppSelector } from '@/redux/hooks/hooks';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LANG } from '@/utils/languages';
import { USER_MOCK } from '@/tests/auth-mocks';
import { User } from 'firebase/auth';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');
vi.mock('react-firebase-hooks/auth');

describe('Login btn', () => {
  afterEach(() => cleanup());
  it('should correctly renders on en language without authorization', () => {
    vi.mocked(useAuthState).mockReturnValue([undefined, false, undefined]);
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<LoginBtn />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.login)).toBeDefined();
  });

  it('should correctly renders in russian without authorization', () => {
    vi.mocked(useAuthState).mockReturnValue([undefined, false, { name: '', message: '' }]);
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<LoginBtn />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.ru.login)).toBeDefined();
  });
  it('should correctly renders with correct authorization', () => {
    vi.mocked(useAuthState).mockReturnValue([USER_MOCK as unknown as User, false, { name: 'name', message: '' }]);
    customRender(<LoginBtn />);
    expect(screen.getByAltText(/avatar of the user/i)).toBeDefined();
    expect(screen.getByText(USER_MOCK.email)).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });
});
