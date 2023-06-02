import { FaAngleRight } from 'react-icons/fa';
import styles from '../editor/Editor.module.scss';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { changeDataSchema, changeUrlData } from '@/redux/api-data/api-data';
import { getSchema } from '@/utils/async-funcs';
import { queryDoc } from '../search-api/query-param';
import { ChangeEvent, KeyboardEvent } from 'react';
import { toast } from 'react-toastify';

type InputAddressProps = {
  urlAddress: string;
  setUrlAddress: (arg: string) => void;
};

export default function InputAddress({ urlAddress, setUrlAddress }: InputAddressProps) {
  const { url } = styles;
  const dispatch = useAppDispatch();

  async function handleSavingUrl(urlValue: string) {
    dispatch(changeUrlData(urlValue));
    const res = await getSchema(urlValue, queryDoc);
    if (res) {
      toast.success('We have successfully recieved the schema from graphql server!');
    }
    dispatch(changeDataSchema(JSON.stringify(res) || ''));
  }

  return (
    <>
      <FaAngleRight />
      <input
        type="url"
        name="urlapi"
        id="urlapi"
        pattern="https://.*"
        value={urlAddress}
        className={url}
        onKeyDown={({ code }: KeyboardEvent) => {
          if (code === 'Enter') {
            handleSavingUrl(urlAddress);
          }
        }}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setUrlAddress(value)}
        onBlur={async ({ target: { value } }: ChangeEvent<HTMLInputElement>) => handleSavingUrl(value)}
        onPaste={async () => {
          const pastedUrl = await navigator.clipboard.readText();
          handleSavingUrl(pastedUrl);
        }}
      />
    </>
  );
}
