import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import Link from 'next/link';
import { Settings } from '../svg/svg';
import { useAppSelector } from '@/redux/hooks/hooks';
import LoginLogoutBtns from '../login-logout-btns/login-logout-btns';
import { ROUTES } from '@/utils/const';
import { LANG } from '@/utils/languages';
import Logo from '../logo/logo';

import dynamic from 'next/dynamic';
import useHeaderListeners from '@/hooks/use-header-listeners';

const SettingsPanel = dynamic(() => import('../settings-panel/settings-panel'));

export default function Header() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [user] = useAuthState(auth);
  const { sticky, isPanelOpen, setIsPanelOpen } = useHeaderListeners();

  return (
    <div className={`header-wrapper ${theme}`}>
      <header className={`header ${sticky}`}>
        <Logo place={'header'} />
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__list--item">
              <Link href={ROUTES.main}>About</Link>
            </li>
            {user && (
              <li className="nav__list--item">
                <Link href={ROUTES.graphiql}>Playground</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__btns-wrapper">
          <button type="button" className="header__settings-btn" onClick={() => setIsPanelOpen(!isPanelOpen)}>
            <Settings />
            <span className="header__settings-btn--text">{LANG[language].settings}</span>
          </button>
          <LoginLogoutBtns />
          {isPanelOpen && <SettingsPanel />}
        </div>
      </header>
      <div className="compensate-sticky-padding"></div>
    </div>
  );
}
