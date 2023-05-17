import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Footer from './footer';
import { LANG } from '@/utils/languages';
import { useAppSelector } from '@/redux/hooks/hooks';
vi.mock('@/redux/hooks/hooks');
describe('Footer', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('navigation')).toBeDefined();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    Object.values(LANG.en.footer).map((author) => expect(screen.getByText(new RegExp(author, 'i'))).toBeDefined());
    expect(screen.getByText(new RegExp(LANG.en.rsSchool, 'i'))).toBeDefined();
  });
  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('navigation')).toBeDefined();
    expect(screen.getAllByRole('link')).toHaveLength(5);
    Object.values(LANG.ru.footer).map((author) => expect(screen.getByText(new RegExp(author, 'i'))).toBeDefined());
    expect(screen.getByText(new RegExp(LANG.ru.rsSchool, 'i'))).toBeDefined();
  });
});
