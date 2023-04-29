/* eslint-disable @typescript-eslint/no-var-requires */
import { useEffect, useRef } from 'react';
import { buildSchema } from 'graphql';
export default function Example() {
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
        lint: {
          schema: buildSchema('type Query { hello: String }'),
        },
        theme: 'material',
      });
      instance.setSize('100%', '100%');
    }
  }, []);
  return <textarea ref={codeMirrorRef}></textarea>;
}
