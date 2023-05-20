import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BtnTry from './btn-try';
import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import customRender from '@/tests/render-with-providers';
import mockRouter from 'next-router-mock';
import { ROUTES } from '@/utils/const';

vi.mock('@/redux/hooks/hooks');

describe('Btn try', () => {
  afterEach(() => cleanup());
  it('should correctly renders in english', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<BtnTry place="main" />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.en.main.startBtn)).toBeDefined();
  });
  it('should correctly renders in russian', () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'ru' });
    customRender(<BtnTry place="main" />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(LANG.ru.main.startBtn)).toBeDefined();
  });
  it('should correctly change an url, when user click', async () => {
    vi.mocked(useAppSelector).mockReturnValue({ language: 'en' });
    customRender(<BtnTry place="main" />);
    mockRouter.push(ROUTES.main);
    const tryBtn = screen.getByText(LANG.en.main.startBtn);
    await userEvent.click(tryBtn);
    expect(mockRouter.asPath).toEqual(ROUTES.graphiql);
  });
});
