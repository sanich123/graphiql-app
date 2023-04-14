import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GraphiQl from '../../pages/graphiql';

describe('GrqphiQl', () => {
  it('should correctly render', () => {
    render(<GraphiQl />);
    expect(screen.getByPlaceholderText(/You can type your graphiql requests here/i)).toBeDefined();
  });
});
