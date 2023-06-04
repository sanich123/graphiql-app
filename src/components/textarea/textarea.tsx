import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { useState } from 'react';
import { INITIAL_REQUEST, INITIAL_VARIABLE } from '@/constants/const';
import { saveRequest, saveVariables } from '@/redux/api-data/api-data';
import styles from './textarea.module.scss';
import { TEXTAREA_PLACES, THEMES } from '@/constants/enums';

export function Textarea({ place }: { place: string }) {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [code, setCode] = useState(place === TEXTAREA_PLACES.request ? INITIAL_REQUEST : INITIAL_VARIABLE);

  return (
    <div className={styles.wrapper}>
      <CodeMirror
        value={code}
        theme={theme === THEMES.light ? THEMES.light : THEMES.dark}
        height="100%"
        extensions={[json()]}
        onChange={(value) => {
          setCode(value);
          dispatch(place === TEXTAREA_PLACES.request ? saveRequest(value) : saveVariables(value));
        }}
      />
    </div>
  );
}
