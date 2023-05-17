import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import BtnTry from './btn-try';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';

vi.mock('@/redux/hooks/hooks');

describe('Btn try', () => {
  afterEach(() => {
    cleanup();
  });
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    render(
      <Provider store={store}>
        <BtnTry place="main" />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.main.startBtn)).toBeDefined();
  });

  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    render(
      <Provider store={store}>
        <BtnTry place="main" />
      </Provider>,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.ru.main.startBtn)).toBeDefined();
  });
});
