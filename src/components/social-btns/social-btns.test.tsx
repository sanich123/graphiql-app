import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import SocialBtns from './social-btns';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

describe('Social btns', () => {
  it('should correctly renders', () => {
    render(
      <Provider store={store}>
        <SocialBtns />
      </Provider>
    );
    ['login with github', 'login with google'].map((socialName) => expect(screen.getByText(new RegExp(socialName, 'i'))).toBeDefined());
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
