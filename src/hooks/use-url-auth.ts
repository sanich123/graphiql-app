import { queryDoc } from '@/components/search-api/query-param';
import { auth } from '@/firebase';
import { changeDataSchema, setUrlAddress } from '@/redux/api-data/api-data';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { getSchema } from '@/utils/async-funcs';
import { BASE_URL } from '@/constants/const';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ROUTES } from '@/constants/enums';

export default function useUrlAuth() {
  const [user, loading] = useAuthState(auth);
  const [url, setUrl] = useState(BASE_URL);
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user && !loading) {
      push(ROUTES.main);
    }
  }, [user, push, loading]);

  useEffect(() => {
    async function makeDefaultRequest() {
      dispatch(setUrlAddress(BASE_URL));
      const response = await getSchema(BASE_URL, queryDoc);

      if (response) {
        dispatch(changeDataSchema(JSON.stringify(response)));
      }
    }

    makeDefaultRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { url, setUrl };
}
