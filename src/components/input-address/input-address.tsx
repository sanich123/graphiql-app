import { FaAngleRight } from 'react-icons/fa';
import styles from '../editor/Editor.module.scss';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { changeDataSchema, changeUrlData } from '@/redux/api-data/api-data';
import { makeRequest } from '@/utils/async-funcs';
import { queryDoc } from '../search-api/query-param';
import { ChangeEvent } from 'react';

type InputAddressProps = {
  urlAddress: string;
  setUrlAddress: (arg: string) => void;
};

export default function InputAddress({ urlAddress, setUrlAddress }: InputAddressProps) {
  const { url } = styles;
  const dispatch = useAppDispatch();
  return (
    <>
      <FaAngleRight />
      <input
        type="url"
        name="urlapi"
        id="urlapi"
        pattern="https://.*"
        value={urlAddress}
        className={`${url}`}
        onChange={async ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
          setUrlAddress(value);
          dispatch(changeUrlData(value));
          const res = await makeRequest(value, queryDoc);
          dispatch(changeDataSchema(JSON.stringify(res) || ''));
        }}
      />
    </>
  );
}
