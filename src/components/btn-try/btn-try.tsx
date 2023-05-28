import { useAppSelector } from '@/redux/hooks/hooks';
import { ROUTES } from '@/utils/const';
import { LANG } from '@/utils/languages';
import { useRouter } from 'next/router';
import style from './btn-try.module.scss';

export default function BtnTry() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { push } = useRouter();

  return (
    <button className={style.btnTry} onClick={() => push(ROUTES.graphiql)}>
      {LANG[language].main.startBtn}
    </button>
  );
}
