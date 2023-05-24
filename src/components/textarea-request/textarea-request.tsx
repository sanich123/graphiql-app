import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode';
import style from './textarea-request.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function TetxtareaRequest() {
  const defaultValue = 'query {}';
  const theme = useSelector((state: RootState) => state.changeThemeLang.theme);
  const isLightTheme = theme === 'light';

  return (
    <div className={style.wrapper}>
      <CodeMirror value={defaultValue} theme={isLightTheme ? xcodeLight : xcodeDark} height="100%" extensions={[javascript({ jsx: true })]} />
    </div>
  );
}
