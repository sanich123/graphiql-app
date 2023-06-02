import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import { useAppSelector } from '@/redux/hooks/hooks';
import Logo from './logo';
import { LANG } from '@/constants/languages';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');
describe('Login button', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<Logo place="header" />);
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByText(LANG.en.graphiql)).toBeDefined();
  });
  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<Logo place="header" />);
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByText(LANG.ru.graphiql)).toBeDefined();
  });
});
