/* eslint-disable @typescript-eslint/no-var-requires */
// import { useEffect, useRef } from 'react';
// import { buildSchema } from 'graphql';

// type CodeMirrorObject = {
//   display: { input: { prevInput: string } };
// };

// export default function Example() {
//   const codeMirrorRef = useRef(null);
//   useEffect(() => {
//     if (codeMirrorRef.current) {
//       require('codemirror/mode/markdown/markdown');
//       require('codemirror/addon/hint/show-hint');
//       require('codemirror/addon/lint/lint');
//       require('codemirror-graphql/hint');
//       require('codemirror-graphql/lint');
//       require('codemirror-graphql/mode');
//       const CodeMirror = require('codemirror');
//       CodeMirror.fromTextArea(codeMirrorRef.current, {
//         lineNumbers: true,
//         lineWrapping: false,
//         mode: 'graphql',
//         autocorrect: true,
//         // extraKeys: {
//         //   'Ctrl-Enter': (changeObj: CodeMirrorObject) => {
//         //     // const {
//         //     //   display: {
//         //     //     input: { prevInput },
//         //     //   },
//         //     // } = changeObj;
//         //   },
//         // },
//         lint: {
//           schema: buildSchema('type Query { hello: String }'),
//         },
//         hintOptions: {
//           schema: buildSchema('type Query { hello: String }'),
//         },
//         theme: 'material',
//       });
//       // instance.on('inputRead', (changeObj: { display: { input: { prevInput: string } } }) => {
//       //   const {
//       //     display: {
//       //       input: { prevInput },
//       //     },
//       //   } = changeObj;
//       // });

//       // instance.on('keyHandled', (codeMirrorObj: CodeMirrorObject, name: string, event: KeyboardEvent) => {
//       //   event.preventDefault();
//       //   const { ctrlKey, code } = event;
//       //   console.log(codeMirrorObj, ctrlKey, code);
//       // });
//     }
//   }, []);

//   return <textarea ref={codeMirrorRef}></textarea>;
// }
export {};
