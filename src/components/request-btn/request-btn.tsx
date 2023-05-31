import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import React from 'react';
import styles from '../editor/Editor.module.scss';
import { FaPlay } from 'react-icons/fa';
import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { changeData } from '@/redux/save-data/save-data';

export default function RequestBtn({ urlAddress }: { urlAddress: string }) {
  const [sendRequest] = useSendGraphiqlResponseMutation();
  const { requestData: request } = useAppSelector(({ savedData }) => savedData);
  const { btnSend } = styles;
  const dispatch = useAppDispatch();

  return (
    <button
      className={btnSend}
      onClick={async () => {
        const response = await sendRequest({ url: urlAddress, request: JSON.parse(request) });
        dispatch(changeData(JSON.stringify({ response, request })));
      }}
    >
      <FaPlay />
    </button>
  );
}
