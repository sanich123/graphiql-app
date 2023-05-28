import { useAppSelector } from '@/redux/hooks/hooks';
import { ROUTES } from '@/utils/const';
import { LANG } from '@/utils/languages';
import { useRouter } from 'next/router';
import style from './btn-try.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

export default function BtnTry() {
  const [user] = useAuthState(auth);
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { push } = useRouter();

  return (
    <button className={style.btnTry} onClick={() => (user ? push(ROUTES.graphiql) : push(ROUTES.login))}>
      {LANG[language].main.startBtn}
    </button>
  );
}
