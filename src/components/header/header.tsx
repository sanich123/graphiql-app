import { Settings } from '../svg/svg';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks/hooks';
import LoginLogoutBtns from '../login-logout-btns/login-logout-btns';
import { ROUTES } from '@/utils/const';
import { LANG } from '@/utils/languages';
import { useEffect, useState } from 'react';
import SettingsPanel from '../settings-panel/settings-panel';
import { setClickOnOverlay, setEscListener } from '@/utils/dom-utils';
import Logo from '../logo/logo';

export default function Header() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  useEffect(() => {
    if (isPanelOpen) {
      setEscListener(setIsPanelOpen);
      setClickOnOverlay(setIsPanelOpen, isPanelOpen);
      return () => {
        setEscListener(setIsPanelOpen);
        setClickOnOverlay(setIsPanelOpen, isPanelOpen);
      };
    }
  }, [setIsPanelOpen, isPanelOpen]);
  return (
    <header className={`header ${theme}`}>
      <Logo place={'header'} />
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__list--item">
            <Link href={ROUTES.main}>About</Link>
          </li>
          <li className="nav__list--item">
            <Link href={ROUTES.graphiql}>Playground</Link>
          </li>
        </ul>
      </nav>
      <div className="header__settings-login-wrapper">
        <button type="button" className="header__settings-btn" onClick={() => setIsPanelOpen(!isPanelOpen)}>
          <Settings />
          {LANG[language].settings}
        </button>
        <LoginLogoutBtns />
        {isPanelOpen && <SettingsPanel />}
      </div>
    </header>
  );
}
