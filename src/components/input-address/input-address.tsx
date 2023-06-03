import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { changeDataSchema, setUrlAddress } from '@/redux/api-data/api-data';
import { getSchema } from '@/utils/async-funcs';
import { queryDoc } from '../search-api/query-param';
import { ChangeEvent, KeyboardEvent } from 'react';
import useUrlAuth from '@/hooks/use-url-auth';
import styles from '../editor/Editor.module.scss';
import { FaAngleRight } from 'react-icons/fa';
import { errorHandler } from '@/utils/helpers';

export default function InputAddress() {
  const { url, setUrl } = useUrlAuth();
  const dispatch = useAppDispatch();
  const { savedUrlAddress } = useAppSelector(({ apiData }) => apiData);

  async function handleSavingUrl(urlValue: string) {
    try {
      dispatch(setUrlAddress(urlValue));
      const schema = await getSchema(urlValue, queryDoc);
      dispatch(changeDataSchema(JSON.stringify(schema)));
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <div className={`flex gap-2 items-center ${styles.urlWrap}`}>
      <FaAngleRight />
      <input
        type="url"
        name="urlapi"
        id="urlapi"
        pattern="https://.*"
        value={url}
        className={styles.url}
        onKeyDown={async ({ code }: KeyboardEvent) => code === 'Enter' && handleSavingUrl(url)}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setUrl(value)}
        onBlur={async ({ target: { value } }: ChangeEvent<HTMLInputElement>) => value !== savedUrlAddress && handleSavingUrl(value)}
        onPaste={async () => handleSavingUrl(await navigator.clipboard.readText())}
      />
    </div>
  );
}
