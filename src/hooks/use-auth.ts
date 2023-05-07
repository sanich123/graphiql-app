import { auth } from '@/firebase';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);

  return { email, password, name, setName, setEmail, setPassword, user, loading, error };
}
