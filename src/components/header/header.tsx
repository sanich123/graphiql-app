import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks/hooks';
import Logo from '../logo/logo';
import dynamic from 'next/dynamic';
import useHeaderListeners from '@/hooks/use-header-listeners';
import SettingsBtn from '../settings-btn/settings-btn';
import LoginBtn from '../login-btn/login-btn';
import LogoutBtn from '../logout-btn/logout-btn';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/enums';

const SettingsPanel = dynamic(() => import('../settings-panel/settings-panel'), {
  ssr: false,
});

export default function Header() {
  const { theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [user] = useAuthState(auth);
  const { sticky, isPanelOpen, setIsPanelOpen } = useHeaderListeners();
  const router = useRouter();
  const path = router.asPath.split('?')[0];

  return (
    <div className={`header-wrapper ${theme}`}>
      <header className={`header ${sticky}`}>
        <Logo place={'header'} />
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className={path === ROUTES.main ? 'nav__list--item active' : 'nav__list--item'}>
              <Link href={ROUTES.main}>About</Link>
            </li>
            {user && (
              <li className={path === ROUTES.graphiql ? 'nav__list--item active' : 'nav__list--item'}>
                <Link href={ROUTES.graphiql}>Playground</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__btns-wrapper">
          <SettingsBtn setIsPanelOpen={setIsPanelOpen} isPanelOpen={isPanelOpen} />
          <LoginBtn />
          {user && <LogoutBtn />}
          {isPanelOpen && <SettingsPanel />}
        </div>
      </header>
      <div className="compensate-sticky-padding"></div>
    </div>
  );
}
