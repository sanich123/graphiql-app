import { useAppSelector } from '@/redux/hooks/hooks';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { ROUTES } from '@/constants/enums';
import { LANG } from '@/constants/languages';
import style from './btn-try.module.scss';

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
