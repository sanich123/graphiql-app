import { logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset } from '@/firebase/email-auth';
import { ChangeEvent, SyntheticEvent } from 'react';
import { toast } from 'react-toastify';

export function handleSetState(setStateFn: (arg: string) => void) {
  return ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setStateFn(value);
  };
}

export function handleSubmitForm(name: string, email: string, password: string, isRegisterOpen: boolean, isResetOpen: boolean) {
  return (e: SyntheticEvent) => {
    e.preventDefault();
    if (isRegisterOpen) {
      if (!name || !email || !password) {
        return toast.warn('Нужно заполнить все поля, чтобы зарегистрироваться');
      }
      return registerWithEmailAndPassword(name, email, password);
    } else if (isResetOpen) {
      if (!email) {
        return toast.warn('Чтобы сбросить пароль, нужно ввести валидный email');
      }
      return sendPasswordReset(email);
    } else if (!password || !email) {
      return toast.warn('Нельзя залогиниться, не введя имя email либо password');
    }
    return logInWithEmailAndPassword(email, password);
  };
}
