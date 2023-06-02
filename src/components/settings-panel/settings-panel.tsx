import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/constants/languages';
import { changeTheme, changeLanguage } from '@/redux/change-lang-slice/change-lang-slice';
import { useCallback, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { RiMoonFill, RiSunFill, RiCharacterRecognitionLine, RiCharacterRecognitionFill } from 'react-icons/ri';
import { LANGUAGES, THEMES } from '@/constants/enums';

export default function SettingsPanel() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const dispatch = useAppDispatch();
  const changeThemeHandle = useCallback(() => dispatch(changeTheme()), [dispatch]);
  const changeLanguageHandle = useCallback(() => dispatch(changeLanguage()), [dispatch]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <IconContext.Provider value={{ size: '20', className: 'iconsColor' }}>
      <div className="header__settings-panel settings-panel">
        <button className={`header__settings-panel--button ${theme === THEMES.dark && 'active'}`} onClick={changeThemeHandle} data-cy="dark">
          <RiMoonFill />
          {LANG[language].dark}
        </button>
        <button className={`header__settings-panel--button ${theme === THEMES.light && 'active'}`} onClick={changeThemeHandle} data-cy="light">
          <RiSunFill />
          {LANG[language].light}
        </button>
        <button className={`header__settings-panel--button ${language === LANGUAGES.ru && 'active'}`} onClick={changeLanguageHandle} data-cy="ru">
          <RiCharacterRecognitionFill />
          {LANG[language].ru}
        </button>
        <button className={`header__settings-panel--button ${language === LANGUAGES.en && 'active'}`} onClick={changeLanguageHandle} data-cy="en">
          <RiCharacterRecognitionLine />
          {LANG[language].en}
        </button>
      </div>
    </IconContext.Provider>
  );
}
