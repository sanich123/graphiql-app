import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import style from './textarea-request.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useCallback, useState } from 'react';

export function TetxtareaRequest() {
  const theme = useSelector((state: RootState) => state.changeThemeLang.theme);
  const isLightTheme = theme === 'light';
  const [code, setCode] = useState('query {}');

  const onChangeHandle = useCallback((value: string) => {
    setCode(value);
  }, []);

  return (
    <div className={style.wrapper}>
      <CodeMirror value={code} theme={isLightTheme ? 'light' : 'dark'} height="100%" extensions={[javascript({ jsx: true })]} onChange={onChangeHandle} />
    </div>
  );
}
