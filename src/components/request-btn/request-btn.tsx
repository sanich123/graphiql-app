import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { saveResponse } from '@/redux/api-data/api-data';
import styles from '../editor/Editor.module.scss';
import { FaPlay } from 'react-icons/fa';
import { errorHandler } from '@/utils/helpers';

export default function RequestBtn() {
  const dispatch = useAppDispatch();
  const [sendRequest, { isLoading }] = useSendGraphiqlResponseMutation();
  const { savedUrlAddress, requestData } = useAppSelector(({ apiData }) => apiData);

  return (
    <button
      className={styles.btnSend}
      onClick={async () => {
        try {
          const response = await sendRequest({ url: savedUrlAddress, request: requestData });
          dispatch(saveResponse(response));
        } catch (error) {
          errorHandler(error);
        }
      }}
      disabled={isLoading}
    >
      {isLoading && 'Loading'}
      {!isLoading && <FaPlay />}
    </button>
  );
}
