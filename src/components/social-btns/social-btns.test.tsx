import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/tests/render-with-providers';
import SocialBtns from './social-btns';

describe('Social btns', () => {
  it('should correctly renders', () => {
    renderWithProviders(<SocialBtns />);
    ['login with github', 'login with google'].map((socialName) => expect(screen.getByText(new RegExp(socialName, 'i'))).toBeDefined());
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
