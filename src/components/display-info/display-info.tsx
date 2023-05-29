import { useAppSelector } from '@/redux/hooks/hooks';
// import { json } from '@codemirror/lang-json';
// import CodeMirror from '@uiw/react-codemirror';
import style from './display-info.module.scss';
import JsonFormatter from 'react-json-formatter';
// import { createTheme } from '@uiw/codemirror-themes';

export function DisplayInfo() {
  const { responseData } = useAppSelector(({ savedData }) => savedData);
  const theme = useAppSelector((state) => state.changeThemeLang.theme);
  const isLightTheme = theme === 'light';
  const jsonStyle = {
    propertyStyle: { color: `${isLightTheme ? 'black' : 'white'}` },
    stringStyle: { color: 'red' },
    numberStyle: { color: 'darkorange' },
  };

  return <div className={`${style.leftSide}  display-info`}>{responseData && <JsonFormatter json={responseData} tabWith={5} jsonStyle={jsonStyle} />}</div>;
}
