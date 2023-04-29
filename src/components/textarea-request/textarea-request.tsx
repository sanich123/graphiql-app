import { MutableRefObject } from 'react';
import styles from './textarea-request.module.scss';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { changeData } from '@/redux/save-data/save-data';
import { useAppDispatch } from '@/redux/hooks/hooks';

interface TextareaRequestProps {
  up: MutableRefObject<HTMLInputElement | null>;
}
export function TetxtareaRequest({ up }: TextareaRequestProps) {
  const { textarea, beautifyDiv } = styles;
  const [, setRowText] = useState('');
  const dispatch = useAppDispatch();
  const [sendRequest] = useSendGraphiqlResponseMutation();

  return (
    <>
      <textarea
        defaultValue={' user(id: 1) { posts { data { id title } } }'}
        className={textarea}
        onInput={({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => setRowText(value)}
        onKeyDown={async ({ code, ctrlKey, target: { value } }: ChangeEvent<HTMLTextAreaElement> & KeyboardEvent) => {
          if (code === 'Enter' && ctrlKey) {
            await sendRequest(value)
              .unwrap()
              .then((response) => dispatch(changeData(JSON.stringify(response, null, 1))));
          }
        }}
      />
      <div className={`${beautifyDiv} topSide`} placeholder="You can type your graphiql requests here" ref={up}>
        {/* {rowText.split('').map((char, i) => (
          <div key={`${char}+${i}`} className="char" id={`${i}`}>
            {char}
          </div>
        ))} */}
      </div>
    </>
  );
}
