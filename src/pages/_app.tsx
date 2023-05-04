import '@/styles/globals.css';
import '@/styles/entry.scss';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
