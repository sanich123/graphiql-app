import { Logo, Settings } from '../svg/svg';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks/hooks';
import LoginLogoutBtns from '../login-logout-btns/login-logout-btns';
import { ROUTES } from '@/utils/const';
import { LANG } from '@/utils/languages';

export default function Header() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <header className="header">
      <Link href={ROUTES.main} className="header__logo">
        <Logo theme={theme} />
        <span className="header__logo--text">GRAPHiQl</span>
      </Link>
      <button type="button" className="header__settings-btn">
        <Settings theme={theme} />
        {LANG[language].settings}
      </button>
      <LoginLogoutBtns />
    </header>
  );
}
