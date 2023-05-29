import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import style from './textarea-request.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { changeData } from '@/redux/save-data/save-data';

export function TetxtareaRequest() {
  const theme = useAppSelector((state) => state.changeThemeLang.theme);
  const isLightTheme = theme === 'light';
  const dispatch = useAppDispatch();
  const [code, setCode] = useState(`query {
  post(id: 1) {
    id
    title
    body
  }
}`);

  const onChangeHandle = useCallback(() => {
    dispatch(changeData(JSON.stringify({ request: code })));
  }, [code, dispatch]);

  useEffect(onChangeHandle, [onChangeHandle]);

  return (
    <div className={style.wrapper}>
      <CodeMirror value={code} theme={isLightTheme ? 'light' : 'dark'} height="100%" extensions={[json()]} onChange={(value) => setCode(value)} />
    </div>
  );
}
