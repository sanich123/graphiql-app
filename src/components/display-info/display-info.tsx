import { useAppSelector } from '@/redux/hooks/hooks';
import style from './display-info.module.scss';
import styles from '../editor/Editor.module.scss';
import { THEMES } from '@/constants/enums';
import { JsonView, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export function DisplayInfo() {
  const { responseData } = useAppSelector(({ apiData }) => apiData);
  const { theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { sideDispInfo } = styles;
  const isLightTheme = theme === THEMES.light;

  return (
    <div className={sideDispInfo}>
      <div className={`${style.leftSide} display-info`}>
        {responseData && <JsonView data={JSON.parse(responseData)} shouldInitiallyExpand={() => true} style={isLightTheme ? darkStyles : defaultStyles} />}
      </div>
    </div>
  );
}
