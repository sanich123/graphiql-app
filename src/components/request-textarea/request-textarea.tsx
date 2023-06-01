import React from 'react';
import RequestBtn from '../request-btn/request-btn';
import styles from '../editor/Editor.module.scss';
import { TetxtareaRequest } from '../textarea-request/textarea-request';
import useTextEditor from '@/hooks/use-text-editor';

export default function RequestTextarea({ urlAddress }: { urlAddress: string }) {
  const { sideEditor, queryHeader, title } = styles;
  const { openEditor } = useTextEditor();
  return (
    <div className={`${sideEditor}`}>
      <div className={`${queryHeader}`}>
        <div className={title} onClick={openEditor}>
          Query
        </div>
        <RequestBtn urlAddress={urlAddress} />
      </div>
      <TetxtareaRequest />
    </div>
  );
}
