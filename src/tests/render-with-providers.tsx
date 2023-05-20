import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { store } from '@/redux/store';
import { ReactNode } from 'react';

export default function customRender(children: ReactNode) {
  return render(<Provider store={store}>{children}</Provider>, { wrapper: MemoryRouterProvider });
}
