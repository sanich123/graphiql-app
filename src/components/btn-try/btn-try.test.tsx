import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import BtnTry from './btn-try';
import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import customRender from '@/tests/render-with-providers';

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
});
