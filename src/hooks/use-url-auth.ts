import { auth } from '@/firebase';
import { BASE_URL, ROUTES } from '@/utils/const';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function useUrlAuth() {
  const [user] = useAuthState(auth);
  const [urlAddress, setUrlAddress] = useState(BASE_URL);
  const { push } = useRouter();
  useEffect(() => {
    if (!user) {
      push(ROUTES.main);
    }
  }, [user, push]);
  return { urlAddress, setUrlAddress };
}
