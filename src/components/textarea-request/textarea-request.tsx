import { MutableRefObject } from 'react';
import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { changeData } from '@/redux/save-data/save-data';
import { useAppDispatch } from '@/redux/hooks/hooks';

interface TextareaRequestProps {
  up: MutableRefObject<HTMLInputElement | null>;
  setRequestQuery: (arg: string) => void;
}
export function TetxtareaRequest({ up, setRequestQuery }: TextareaRequestProps) {
  const dispatch = useAppDispatch();
  const [sendRequest] = useSendGraphiqlResponseMutation();

  return (
    <input
      type="textarea"
      className="topSide"
      placeholder="You can type your graphiql requests here"
      ref={up}
      defaultValue={' user(id: 1) { posts { data { id title } } }'}
      onKeyDown={async ({ code, ctrlKey, target }) => {
        if (target instanceof HTMLInputElement) {
          if (code === 'Enter' && ctrlKey) {
            setRequestQuery(target.value);
            await sendRequest(target.value)
              .unwrap()
              .then((response) => dispatch(changeData(JSON.stringify(response))));
          }
        }
      }}
    />
  );
}
