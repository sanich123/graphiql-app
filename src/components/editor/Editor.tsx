import Split from 'react-split';
import { DisplayInfo } from '../../components';
import { useWidth } from '@/hooks/use-width';
import InputAddress from '../input-address/input-address';
import RequestTextarea from '../request-textarea/request-textarea';
import RequestVariables from '../request-variables/request-variables';
import useTextEditor from '@/hooks/use-text-editor';
import styles from '../editor/Editor.module.scss';
import useUrlAuth from '@/hooks/use-url-auth';

export function Editor() {
  const { urlWrap, editor } = styles;
  const { urlAddress, setUrlAddress } = useUrlAuth();
  const { editorMinSize } = useTextEditor();

  return (
    <>
      <div className={`flex gap-2 items-center ${urlWrap}`}>
        <InputAddress urlAddress={urlAddress} setUrlAddress={setUrlAddress} />
      </div>
      {useWidth() > 600 ? (
        <Split className={editor} sizes={[50, 50]} minSize={[300, 300]} gutterSize={10} style={{ height: 'calc(100vh - 150px)' }}>
          <Split direction="vertical" sizes={editorMinSize} minSize={[200, 70]} gutterSize={10}>
            <RequestTextarea urlAddress={urlAddress} />
            <RequestVariables />
          </Split>
          <DisplayInfo />
        </Split>
      ) : (
        <>
          <RequestTextarea urlAddress={urlAddress} />
          <RequestVariables />
          <DisplayInfo />
        </>
      )}
    </>
  );
}
