import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import Footer from './footer';
import { LANG } from '@/utils/languages';
import { useAppSelector } from '@/redux/hooks/hooks';
import customRender from '@/tests/render-with-providers';

vi.mock('@/redux/hooks/hooks');

describe('Footer', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<Footer />);
    expect(screen.getByRole('navigation')).toBeDefined();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    Object.values(LANG.en.footer).map((author) => expect(screen.getByText(new RegExp(author, 'i'))).toBeDefined());
    expect(screen.getByText(new RegExp(LANG.en.rsSchool, 'i'))).toBeDefined();
  });
  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<Footer />);
    expect(screen.getByRole('navigation')).toBeDefined();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    Object.values(LANG.ru.footer).map((author) => expect(screen.getByText(new RegExp(author, 'i'))).toBeDefined());
    expect(screen.getByText(new RegExp(LANG.ru.rsSchool, 'i'))).toBeDefined();
  });
});
