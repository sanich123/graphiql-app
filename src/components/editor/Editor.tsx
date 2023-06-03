import Split from 'react-split';
import InputAddress from '../input-address/input-address';
import RequestTextarea from '../request-textarea/request-textarea';
import RequestVariables from '../request-variables/request-variables';
import useTextEditor from '@/hooks/use-text-editor';
import { DisplayInfo } from '../../components';
import { useWidth } from '@/hooks/use-width';
import styles from '../editor/Editor.module.scss';

export function Editor() {
  const { editorMinSize } = useTextEditor();

  return (
    <>
      <InputAddress />
      {useWidth() > 600 ? (
        <Split className={styles.editor} sizes={[50, 50]} minSize={[300, 300]} gutterSize={10} style={{ height: 'calc(100vh - 150px)' }}>
          <Split direction="vertical" sizes={editorMinSize} minSize={[200, 70]} gutterSize={10}>
            <RequestTextarea />
            <RequestVariables />
          </Split>
          <DisplayInfo />
        </Split>
      ) : (
        <>
          <RequestTextarea />
          <RequestVariables />
          <DisplayInfo />
        </>
      )}
    </>
  );
}
