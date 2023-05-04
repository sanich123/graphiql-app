import { describe, it } from 'vitest';
import GraphiQl from '../../pages/graphiql';
import { renderWithProviders } from '../render-with-providers';

describe('GrqphiQl', () => {
  it('should correctly render', () => {
    renderWithProviders(<GraphiQl />);
  });
});
