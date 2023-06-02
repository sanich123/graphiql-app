import { useAppSelector } from '@/redux/hooks/hooks';
import style from './display-info.module.scss';
import styles from '../editor/Editor.module.scss';
// import JsonFormatter from 'react-json-formatter';
// import { THEMES } from '@/constants/enums';
import ReactJson from 'react-json-view';

export function DisplayInfo() {
  const { responseData } = useAppSelector(({ apiData }) => apiData);
  // const { theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { sideDispInfo } = styles;
  // const isLightTheme = theme === THEMES.light;

  // const jsonStyle = {
  //   propertyStyle: { color: `${isLightTheme ? 'black' : 'white'}` },
  //   stringStyle: { color: 'red' },
  //   numberStyle: { color: 'darkorange' },
  // };
  // console.log(responseData)
  return (
    <div className={sideDispInfo}>
      <div className={`${style.leftSide} display-info`}>
        {/* {responseData && <JsonFormatter json={responseData} tabWith={4} jsonStyle={jsonStyle} />} */}
        {responseData && (
          <ReactJson
            src={JSON.parse(responseData)}
            indentWidth={2}
            name={false}
            iconStyle={'triangle'}
            enableClipboard={false}
            displayObjectSize
            displayDataTypes
          />
        )}
      </div>
    </div>
  );
}
