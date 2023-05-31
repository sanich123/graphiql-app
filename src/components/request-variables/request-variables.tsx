import React from 'react';
import styles from '../editor/Editor.module.scss';
import { TetxtareaVar } from '../textarea-var/textarea-var';
import useTextEditor from '@/hooks/use-text-editor';

export default function RequestVariables() {
  const { sideVar, varHeader, title } = styles;
  const { openEditor } = useTextEditor();
  return (
    <div className={`${sideVar}`}>
      <div className={`${varHeader}`}>
        <div className={title} onClick={openEditor}>
          Query variables
        </div>
      </div>
      <TetxtareaVar />
    </div>
  );
}
