import { auth, db } from '@/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

export async function logInWithEmailAndPassword(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success('Вы сумели успешно залогиниться');
  } catch (err) {
    if (err instanceof Error) {
      toast.warn(err.message.includes('network') ? 'Неполадки с сетью' : 'Невозможно залогинить незарегистрированного пользователя');
    }
  }
}

export async function registerWithEmailAndPassword(name: string, email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    toast.success('Пользователь был успешно зарегистрирован');
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
}

export async function sendPasswordReset(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success('Password reset link has been sent!');
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
}

export function logOut() {
  signOut(auth);
}
