import { auth } from '@/firebase';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return { email, password, name, isResetOpen, setIsResetOpen, isRegisterOpen, setIsRegisterOpen, setName, setEmail, setPassword, user, loading, error };
}
