import '@/styles/globals.css';
import '../styles/graphiql.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}
