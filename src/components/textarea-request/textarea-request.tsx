/* eslint-disable @typescript-eslint/no-var-requires */
import { MutableRefObject } from 'react';
import styles from './textarea-request.module.scss';
import { useRef, useEffect } from 'react';
import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { changeData } from '@/redux/save-data/save-data';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { buildSchema } from 'graphql';

interface TextareaRequestProps {
  up: MutableRefObject<HTMLInputElement | null>;
}

type CodeMirrorObject = {
  display: { input: { prevInput: string } };
};

export function TetxtareaRequest({ up }: TextareaRequestProps) {
  const { textarea } = styles;
  const dispatch = useAppDispatch();
  const [sendRequest] = useSendGraphiqlResponseMutation();
  const codeMirrorRef = useRef(null);

  useEffect(() => {
    if (codeMirrorRef.current) {
      require('codemirror/mode/markdown/markdown');
      require('codemirror/addon/hint/show-hint');
      require('codemirror/addon/lint/lint');
      require('codemirror-graphql/hint');
      require('codemirror-graphql/lint');
      require('codemirror-graphql/mode');
      const CodeMirror = require('codemirror');
      const instance = CodeMirror.fromTextArea(codeMirrorRef.current, {
        lineNumbers: true,
        lineWrapping: false,
        mode: 'graphql',
        autocorrect: true,
        extraKeys: {
          'Ctrl-Enter': async (changeObj: CodeMirrorObject) => {
            const {
              display: {
                input: { prevInput },
              },
            } = changeObj;
            await sendRequest(prevInput)
              .unwrap()
              .then((response) => dispatch(changeData(JSON.stringify(response, null, 1))));
          },
        },
        lint: {
          schema: buildSchema('type Query { hello: String }'),
        },
        hintOptions: {
          schema: buildSchema('type Query { hello: String }'),
        },
        theme: 'material',
      });
      // instance.on('inputRead', (changeObj: { display: { input: { prevInput: string } } }) => {
      //   const {
      //     display: {
      //       input: { prevInput },
      //     },
      //   } = changeObj;
      // });

      // instance.on('keyHandled', (codeMirrorObj: CodeMirrorObject, name: string, event: KeyboardEvent) => {
      //   event.preventDefault();
      //   const { ctrlKey, code } = event;
      //   console.log(codeMirrorObj, ctrlKey, code);
      // });
    }
  }, [dispatch, sendRequest]);

  return (
    <textarea
      ref={codeMirrorRef}
      defaultValue={' user(id: 1) { posts { data { id title } } }'}
      className={textarea}
      // onKeyDown={async ({ code, ctrlKey, target: { value } }: ChangeEvent<HTMLTextAreaElement> & KeyboardEvent) => {
      //   if (code === 'Enter' && ctrlKey) {
      //     await sendRequest(value)
      //       .unwrap()
      //       .then((response) => dispatch(changeData(JSON.stringify(response, null, 1))));
      //   }
      // }}
    />
  );
}
