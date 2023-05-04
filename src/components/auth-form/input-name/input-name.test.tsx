import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputName from './input-name';

describe('InputName', () => {
  const setName = vi.fn();

  it('should correctly renders', () => {
    render(<InputName setStateFn={setName} value="putin" />);
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByPlaceholderText(/full name/i)).toBeDefined();
    expect(screen.getByDisplayValue(/putin/i)).toBeDefined();
  });
});
