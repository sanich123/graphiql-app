import { describe, it } from 'vitest';
import { renderWithProviders } from '@/tests/render-with-providers';
import Header from './header';

describe('Header', () => {
  it('should correctly renders', () => {
    renderWithProviders(<Header />);
  });
});
