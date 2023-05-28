import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import style from './textarea-var.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function TetxtareaVar() {
  const defaultValue = '';
  const theme = useSelector((state: RootState) => state.changeThemeLang.theme);
  const isLightTheme = theme === 'light';

  return (
    <div className={style.wrapper}>
      <CodeMirror value={defaultValue} theme={isLightTheme ? 'light' : 'dark'} height="100%" extensions={[javascript({ jsx: true })]} />
    </div>
  );
}
