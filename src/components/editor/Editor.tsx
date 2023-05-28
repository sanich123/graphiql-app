import Split from 'react-split';
import { TetxtareaRequest, TetxtareaVar } from '../../components';
import { DisplayInfo } from '../../components';
import { FaPlay, FaAngleRight } from 'react-icons/fa';
import style from './Editor.module.scss';
import { BASE_URL } from '@/utils/const';
import { useCallback, useRef, useState } from 'react';

export function Editor() {
  const [editorMinSize, setEditorMinSize] = useState([91, 9]);
  const openEditor = useCallback(() => {
    const size = editorMinSize[0] === 9 ? [91, 9] : [9, 91];
    setEditorMinSize(size);
  }, [editorMinSize]);

  return (
    <>
      <div className={`flex gap-2 items-center ${style.urlWrap}`}>
        <FaAngleRight />
        <input type="url" name="urlapi" id="urlapi" defaultValue={BASE_URL} className={`${style.url}`} />
      </div>
      <Split className={style.editor} sizes={[50, 50]} minSize={[300, 300]} gutterSize={10} style={{ height: 'calc(100vh - 250px)' }}>
        <Split direction="vertical" sizes={editorMinSize} minSize={[200, 70]} gutterSize={10}>
          <div className={`${style.sideEditor}`}>
            <div className={`${style.queryHeader}`}>
              <div className={style.title} onClick={openEditor}>
                Query
              </div>
              <button className={style.btnSend}>
                <FaPlay />
              </button>
            </div>
            <TetxtareaRequest />
          </div>
          <div className={`${style.sideVar}`}>
            <div className={`${style.varHeader}`}>
              <div className={style.title} onClick={openEditor}>
                Query variables
              </div>
            </div>
            <TetxtareaVar />
          </div>
        </Split>
        <div className={`${style.sideDispInfo}`}>
          <DisplayInfo />
        </div>
      </Split>
    </>
  );
}
