import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { saveResponse } from '@/redux/api-data/api-data';
import { FaPlay, FaCircle } from 'react-icons/fa';
import { errorHandler } from '@/utils/helpers';
import { requestValidator } from '@/utils/request-validator';
import styles from '../editor/Editor.module.scss';

export default function RequestBtn() {
  const dispatch = useAppDispatch();
  const [sendRequest, { isLoading }] = useSendGraphiqlResponseMutation();
  const { savedUrlAddress, requestData, variablesData } = useAppSelector(({ apiData }) => apiData);

  return (
    <button
      className={styles.btnSend}
      onClick={async () => {
        try {
          const requestWithVariables = requestValidator(requestData, variablesData);
          if (requestWithVariables) {
            const response = await sendRequest({ url: savedUrlAddress, request: requestWithVariables });
            dispatch(saveResponse(response));
          }
        } catch (error) {
          errorHandler(error);
        }
      }}
      disabled={isLoading}
    >
      {isLoading && <FaCircle />}
      {!isLoading && <FaPlay />}
    </button>
  );
}
