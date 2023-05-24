import Split from 'react-split';
import { TetxtareaRequest, TetxtareaVar } from '../../components';
import { DisplayInfo } from '../../components';
import { FaPlay, FaAngleRight } from 'react-icons/fa';
import style from './Editor.module.scss';
import { BASE_URL } from '@/utils/const';

export function Editor() {
  return (
    <>
      <div className={`flex gap-2 items-center border-l-gray-400 ${style.urlWrap}`}>
        <FaAngleRight />
        <input type="url" name="urlapi" id="urlapi" defaultValue={BASE_URL} className={`${style.url}`} />
      </div>
      <Split className="flex" sizes={[50, 50]} minSize={[300, 300]} gutterSize={8} style={{ height: 'calc(100vh - 250px)' }}>
        <Split direction="vertical" sizes={[91, 9]} minSize={[200, 60]} gutterSize={8}>
          <div className={`bg-gray-light ${style.sideEditor}`}>
            <div className={`${style.queryHeader}`}>
              <div className={style.title}>Query</div>
              <button className={style.btnSend}>
                <FaPlay />
              </button>
            </div>
            <TetxtareaRequest />
          </div>
          <div className={`bg-gray-light ${style.sideVar}`}>
            <div className={`${style.varHeader}`}>
              <div className={style.title}>Query variables</div>
            </div>
            <TetxtareaVar />
          </div>
        </Split>
        <div className={`bg-gray-light ${style.sideDispInfo}`}>
          <DisplayInfo />
        </div>
      </Split>
    </>
  );
}
