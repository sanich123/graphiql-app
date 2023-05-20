import { logOut } from '@/firebase/email-auth';
import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import { LogoutIcon } from '../svg/svg';

export default function LogoutBtn() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <button type="button" className="header__logout" onClick={() => logOut(language)}>
      <span className="header__logout--text">{LANG[language].logout}</span>
      <span className="header__logout--icon">
        <LogoutIcon />
      </span>
    </button>
  );
}
