import { useAppSelector } from '@/redux/hooks/hooks';
import { javascript } from '@codemirror/lang-javascript';
import { RootState } from '@/redux/store';
import CodeMirror from '@uiw/react-codemirror';
import { useSelector } from 'react-redux';
import style from './display-info.module.scss';
import { createTheme } from '@uiw/codemirror-themes';

// import JsonFormatter from 'react-json-formatter';

export function DisplayInfo() {
  const { responseData } = useAppSelector(({ savedData }) => savedData);

  // const jsonStyle = {
  //   propertyStyle: { color: 'red' },
  //   stringStyle: { color: 'green' },
  //   numberStyle: { color: 'darkorange' },
  // };

  // return <div className="leftSide">{responseData && <JsonFormatter json={responseData} tabWith={2} jsonStyle={jsonStyle} />}</div>;

  const theme = useSelector((state: RootState) => state.changeThemeLang.theme);
  const isLightTheme = theme === 'light';
  const bg = isLightTheme ? '#F4F4F4' : '#384151';

  const myTheme = createTheme({
    styles: [],
    theme,
    settings: {
      background: bg,
      gutterBackground: bg,
    },
  });

  return (
    <div className={style.leftSide}>
      {
        <CodeMirror
          value={responseData}
          theme={myTheme}
          height="100%"
          extensions={[javascript({ jsx: true })]}
          readOnly
          editable={false}
          basicSetup={{
            lineNumbers: false,
            highlightActiveLineGutter: false,
            highlightActiveLine: false,
          }}
        />
      }
    </div>
  );
}
