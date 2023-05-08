import { useAppSelector } from '@/redux/hooks/hooks';
import { logOut } from '@/firebase/email-auth';
import { DefaultUser } from '../svg/svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import Image from 'next/image';
import Loader from '../loader/loader';
import { useRouter } from 'next/router';
import { LANG } from '@/utils/languages';
import { ROUTES } from '@/utils/const';

export default function LoginLogoutBtn() {
  const [user, loading, error] = useAuthState(auth);
  const { language, theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { push } = useRouter();

  return (
    <>
      <button type="button" className="header__login login" onClick={() => push(user ? ROUTES.graphiql : ROUTES.login)}>
        {loading && <Loader />}
        {error && error.message}
        {!user && <DefaultUser theme={theme} />}
        {LANG[language].login}
        {user?.photoURL && <Image className="login__img" src={user?.photoURL} alt="Avatar of the user" width={30} height={30} />}
        {user?.email || user?.displayName}
      </button>
      {user && (
        <button type="button" className="header__logout" onClick={() => logOut(language)}>
          {LANG[language].logout}
        </button>
      )}
    </>
  );
}
