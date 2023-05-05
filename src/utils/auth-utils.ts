import { logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset } from '@/firebase/email-auth';
import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { toast } from 'react-toastify';

export function handleSetState(setStateFn: Dispatch<SetStateAction<string>>) {
  return ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setStateFn(value);
  };
}

export function handleSubmitForm(name: string, email: string, password: string, place: string) {
  return (e: SyntheticEvent) => {
    e.preventDefault();
    if (place === 'Register') {
      if (!name || !email || !password) {
        return toast.warn('Нужно заполнить все поля, чтобы зарегистрироваться');
      }
      return registerWithEmailAndPassword(name, email, password);
    } else if (place === 'Reset') {
      if (!email) {
        return toast.warn('Чтобы сбросить пароль, нужно ввести валидный email');
      }
      return sendPasswordReset(email);
    } else if (place === 'Login') {
      if (!email || !password) {
        return toast.warn('Нельзя залогиниться, не введя имя email либо password');
      }
      return logInWithEmailAndPassword(email, password);
    }
  };
}
