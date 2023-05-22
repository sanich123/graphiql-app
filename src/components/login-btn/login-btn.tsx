import { auth } from '@/firebase';
import { useAppSelector } from '@/redux/hooks/hooks';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../loader/loader';
import { DefaultUserIcon } from '../svg/svg';
import { LANG } from '@/utils/languages';
import { ROUTES } from '@/utils/const';

export default function LoginBtn() {
  const [user, loading, error] = useAuthState(auth);
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { push } = useRouter();

  return (
    <button type="button" className="header__login login" onClick={() => push(user ? ROUTES.graphiql : ROUTES.login)}>
      {loading && <Loader />}
      {error && error.message}
      {!user && <span className="header__login--text">{LANG[language].login}</span>}
      {user?.photoURL ? <Image className="header__login--img" src={user?.photoURL} alt="Avatar of the user" width={30} height={30} /> : <DefaultUserIcon />}
      <span className="header__login--user-info">{user?.email || user?.displayName}</span>
    </button>
  );
}
