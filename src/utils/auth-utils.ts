import { logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset } from '@/firebase/email-auth';
import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { toast } from 'react-toastify';
import { AUTH_PLACES, LANGUAGES } from './const';
import { NOTIFICATIONS } from './notifications';

export function handleSetState(setStateFn: Dispatch<SetStateAction<string>>) {
  return ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setStateFn(value);
  };
}

export function handleSubmitForm(name: string, email: string, password: string, place: AUTH_PLACES, language: LANGUAGES) {
  return (e: SyntheticEvent) => {
    e.preventDefault();
    if (place === AUTH_PLACES.register) {
      if (!name || !email || !password) {
        return toast.warn(NOTIFICATIONS[language].emptyRegisterFields);
      }
      return registerWithEmailAndPassword(name, email, password, language);
    } else if (place === AUTH_PLACES.reset) {
      if (!email) {
        return toast.warn(NOTIFICATIONS[language].emptyEmailField);
      }
      return sendPasswordReset(email, language);
    } else if (place === AUTH_PLACES.login) {
      if (!email || !password) {
        return toast.warn(NOTIFICATIONS[language].emptyEmailPasswordFields);
      }
      return logInWithEmailAndPassword(email, password, language);
    }
  };
}
