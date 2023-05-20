import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { DarkIcon, EnIcon, LightIcon, RuIcon } from '../../svg/svg';
import { LANG } from '@/utils/languages';
import { changeTheme } from '@/redux/change-lang-slice/change-lang-slice';
import { changeLanguage } from '@/redux/change-lang-slice/change-lang-slice';
import { LANGUAGES, THEMES } from '@/utils/const';

export default function SettingsPanel() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const dispatch = useAppDispatch();
  const isLight = theme === THEMES.light ? 'active' : '';
  const isDark = theme === THEMES.dark ? 'active' : '';
  const isRu = language === LANGUAGES.ru ? 'active' : '';
  const isEn = language === LANGUAGES.en ? 'active' : '';

  return (
    <div className={`header__settings-panel ${theme} settings-panel`}>
      <button className={`header__settings-panel--button ${isDark}`} onClick={() => dispatch(changeTheme())} data-cy="dark">
        <DarkIcon />
        {LANG[language].dark}
      </button>
      <button className={`header__settings-panel--button ${isLight}`} onClick={() => dispatch(changeTheme())} data-cy="light">
        <LightIcon />
        {LANG[language].light}
      </button>
      <button className={`header__settings-panel--button ${isRu}`} onClick={() => dispatch(changeLanguage())} data-cy="ru">
        <RuIcon />
        {LANG[language].ru}
      </button>
      <button className={`header__settings-panel--button ${isEn}`} onClick={() => dispatch(changeLanguage())} data-cy="en">
        <EnIcon />
        {LANG[language].en}
      </button>
    </div>
  );
}
