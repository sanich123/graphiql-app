import { useAppSelector } from '@/redux/hooks/hooks';
import style from './display-info.module.scss';
import styles from '../editor/Editor.module.scss';
import JsonFormatter from 'react-json-formatter';

export function DisplayInfo() {
  const { responseData } = useAppSelector(({ savedData }) => savedData);
  const { theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { sideDispInfo } = styles;
  const isLightTheme = theme === 'light';
  const jsonStyle = {
    propertyStyle: { color: `${isLightTheme ? 'black' : 'white'}` },
    stringStyle: { color: 'red' },
    numberStyle: { color: 'darkorange' },
  };

  return (
    <div className={`${sideDispInfo}`}>
      <div className={`${style.leftSide} display-info`}>{responseData && <JsonFormatter json={responseData} tabWith={5} jsonStyle={jsonStyle} />}</div>
    </div>
  );
}
