/* eslint-disable @typescript-eslint/no-var-requires */
import { MutableRefObject } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import type { Extension } from '@codemirror/state';
import { oneDark } from '@codemirror/theme-one-dark';
import type { EditorView } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { SetStateAction, useMemo, useState } from 'react';
import CodeMirror from 'rodemirror';

interface TextareaRequestProps {
  up: MutableRefObject<HTMLDivElement | null>;
}

// type CodeMirrorObject = {
//   display: { input: { prevInput: string } };
// };

export function TetxtareaRequest({ up }: TextareaRequestProps) {
  const baseExtensions: Extension[] = [basicSetup, oneDark];
  const [extensions, setExtensions] = useState(baseExtensions);
  // const { textarea } = styles;
  // const dispatch = useAppDispatch();
  // const [sendRequest] = useSendGraphiqlResponseMutation();
  const selection = useMemo(
    () => ({
      anchor: 7,
    }),
    []
  );
  // eslint-disable-next-line quotes
  const defaultValue = `console.log('Hello world!')`;
  const [, setValue] = useState(defaultValue);

  const [editorView, setEditorView] = useState<EditorView | null>(null);

  return (
    <div ref={up} className="wrapper-textarea">
      <CodeMirror
        value={defaultValue}
        onUpdate={(v: { docChanged: any; state: { doc: { toString: () => SetStateAction<string> } } }) => {
          if (v.docChanged) {
            setValue(v.state.doc.toString());
          }
        }}
        onEditorViewChange={(editView: EditorView) => setEditorView(editView)}
        selection={selection}
        extensions={extensions}
      />

      <div style={{ marginTop: 5 }}>
        <button
          type="button"
          onClick={() => {
            if (!editorView) {
              return;
            }

            const { doc } = editorView.state;

            if (doc.length === 0) {
              return;
            }

            // remove last character
            editorView.dispatch({
              changes: {
                from: doc.length - 1,
                to: doc.length,
                insert: '',
              },
            });
          }}
        >
          Click me to remove a character
        </button>

        <button type="button" onClick={() => setExtensions([...baseExtensions, javascript()])}>
          Click me to add the JavaScript extension
        </button>

        <button type="button" onClick={() => setExtensions(baseExtensions)}>
          Click me to remove the JavaScript extension
        </button>
      </div>
    </div>
  );
}
