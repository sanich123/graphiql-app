import { queryDoc } from '@/components/search-api/query-param';
import { auth } from '@/firebase';
import { changeDataSchema, changeUrlData } from '@/redux/api-data/api-data';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { getSchema } from '@/utils/async-funcs';
import { BASE_URL, ROUTES } from '@/utils/const';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function useUrlAuth() {
  const [user] = useAuthState(auth);
  const [urlAddress, setUrlAddress] = useState(BASE_URL);
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      push(ROUTES.main);
    }
  }, [user, push]);

  useEffect(() => {
    async function makeDefaultRequest() {
      const response = await getSchema(BASE_URL, queryDoc);
      dispatch(changeDataSchema(JSON.stringify(response) || ''));
    }
    dispatch(changeUrlData(BASE_URL));
    makeDefaultRequest();
  });

  return { urlAddress, setUrlAddress };
}
