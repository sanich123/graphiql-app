import { LANGUAGES, THEMES } from '@/utils/const';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang={LANGUAGES.en}>
      <Head />
      <body className={THEMES.light}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
