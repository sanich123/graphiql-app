import '@/styles/entry.scss';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Roboto } from 'next/font/google';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { saveState } from '@/redux/localstorage-store';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  style: ['normal'],
  display: 'swap',
});

store.subscribe(() => saveState(() => store.getState()));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${roboto.className} page-body`}>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
