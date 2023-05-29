import Split from 'react-split';
import { TetxtareaRequest, TetxtareaVar } from '../../components';
import { DisplayInfo } from '../../components';
import { FaPlay, FaAngleRight } from 'react-icons/fa';
import style from './Editor.module.scss';
import { BASE_URL, ROUTES } from '@/utils/const';
import { useCallback, useRef, useEffect, useState } from 'react';
import { changeDataSchema, changeUrlData } from '@/redux/api-data/api-data';
import { queryDoc } from '../search-api/query-param';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { changeData } from '@/redux/save-data/save-data';

export function Editor() {
  const [sendRequest] = useSendGraphiqlResponseMutation();
  const [user] = useAuthState(auth);
  const urlInput = useRef<HTMLInputElement>(null);
  const url = urlInput.current ? (urlInput.current as HTMLInputElement).value : BASE_URL;
  const request = useAppSelector((state) => state.savedData.requestData);
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [editorMinSize, setEditorMinSize] = useState([91, 9]);
  const openEditor = useCallback(() => {
    const size = editorMinSize[0] === 9 ? [91, 9] : [9, 91];
    setEditorMinSize(size);
  }, [editorMinSize]);

  useEffect(() => {
    if (!user) {
      push(ROUTES.main);
    }
  }, [user, push]);

  const requestHandle = async () => {
    const requestJSON = JSON.parse(request);
    const response = await sendRequest({ url, request: requestJSON });
    dispatch(changeData(JSON.stringify({ response, request })));
  };

  async function makeRequest(endpoint: string, query: string) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const res = await response.json();
      dispatch(changeDataSchema(JSON.stringify(res)));
    } catch {
      dispatch(changeDataSchema(''));
    }
  }

  async function changeUrl(event: React.SyntheticEvent) {
    event.preventDefault();
    if (urlInput.current instanceof HTMLInputElement) {
      dispatch(changeUrlData(url));
      await makeRequest(url, queryDoc);
    }
  }
  const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
  };

  const windowWidth = useWidth() > 600;

  return (
    <>
      <div className={`flex gap-2 items-center ${style.urlWrap}`}>
        <FaAngleRight />
        <input type="url" name="urlapi" id="urlapi" defaultValue={BASE_URL} className={`${style.url}`} ref={urlInput} onInput={changeUrl} />
      </div>
      {windowWidth ? (
        <Split className={style.editor} sizes={[50, 50]} minSize={[300, 300]} gutterSize={10} style={{ height: 'calc(100vh - 150px)' }}>
          <Split direction="vertical" sizes={editorMinSize} minSize={[200, 70]} gutterSize={10}>
            <div className={`${style.sideEditor}`}>
              <div className={`${style.queryHeader}`}>
                <div className={style.title} onClick={openEditor}>
                  Query
                </div>
                <button className={style.btnSend} onClick={requestHandle}>
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
      ) : (
        <>
          <div className={`${style.sideEditor}`}>
            <div className={`${style.queryHeader}`}>
              <div className={style.title} onClick={openEditor}>
                Query
              </div>
              <button className={style.btnSend} onClick={requestHandle}>
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
          <div className={`${style.sideDispInfo}`}>
            <DisplayInfo />
          </div>
        </>
      )}
    </>
  );
}
