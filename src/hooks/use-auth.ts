import { auth } from '@/firebase';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  // const { push } = useRouter();
  // useEffect(() => {
  //   if (user) {
  //     push('/graphiql');
  //   }
  // }, [user, loading, push]);
  return { email, password, name, isForgetPassword, setIsForgetPassword, isRegistered, setIsRegistered, setName, setEmail, setPassword, user, loading, error };
}
