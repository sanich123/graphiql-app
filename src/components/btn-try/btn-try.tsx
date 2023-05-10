import { useAppSelector } from '@/redux/hooks/hooks';
import { ROUTES } from '@/utils/const';
import { LANG } from '@/utils/languages';
import { useRouter } from 'next/router';

export default function BtnTry() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { push } = useRouter();
  return (
    <button className="main__btn-try" onClick={() => push(ROUTES.graphiql)}>
      {LANG[language].main.startBtn}
    </button>
  );
}
