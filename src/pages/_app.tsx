import '@/styles/entry.scss';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  style: ['normal'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <div className={roboto.className}>
        <ToastContainer />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
