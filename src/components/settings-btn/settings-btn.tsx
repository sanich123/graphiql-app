import { LANG } from '@/utils/languages';
import { SettingsIcon } from '../svg/svg';
import { useAppSelector } from '@/redux/hooks/hooks';

type SettingsBtnProps = {
  setIsPanelOpen: (arg: boolean) => void;
  isPanelOpen: boolean;
};

export default function SettingsBtn({ setIsPanelOpen, isPanelOpen }: SettingsBtnProps) {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <button type="button" className="header__settings-btn" onClick={() => setIsPanelOpen(!isPanelOpen)}>
      <SettingsIcon />
      <span className="header__settings-btn--text">{LANG[language].settings}</span>
    </button>
  );
}
