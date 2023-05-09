import { BigLogo } from '@/components/svg/svg';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ROUTES } from '@/utils/const';
import { LANG } from '@/utils/languages';
import { useRouter } from 'next/router';

export default function Home() {
  const { push } = useRouter();
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <div className={`wrapper-main ${theme}`}>
      <main className="main">
        <BigLogo />
        <h1 className="main__h1">{LANG[language].main.h1}</h1>
        <p className="main__p">{LANG[language].main.p}</p>
        <button className="main__btn-try" onClick={() => push(ROUTES.graphiql)}>
          {LANG[language].main.startBtn}
        </button>
      </main>
    </div>
  );
}
