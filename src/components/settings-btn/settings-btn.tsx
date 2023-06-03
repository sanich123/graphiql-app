import { LANG } from '@/constants/languages';
import { useAppSelector } from '@/redux/hooks/hooks';
import { RiSettings3Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

type SettingsBtnProps = {
  setIsPanelOpen: (arg: boolean) => void;
  isPanelOpen: boolean;
};

export default function SettingsBtn({ setIsPanelOpen, isPanelOpen }: SettingsBtnProps) {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <IconContext.Provider value={{ size: '20', className: 'iconsColor' }}>
      <button type="button" className="header__settings-btn" onClick={() => setIsPanelOpen(!isPanelOpen)} data-cy="settings-btn">
        <RiSettings3Fill />
        <span className="header__settings-btn--text">{LANG[language].settings}</span>
      </button>
    </IconContext.Provider>
  );
}
