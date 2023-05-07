import { auth, db } from '@/firebase';
import { LANGUAGES } from '@/utils/const';
import { NOTIFICATIONS } from '@/utils/notifications';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

export async function logInWithEmailAndPassword(email: string, password: string, language: LANGUAGES) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success(NOTIFICATIONS[language].successLogin);
  } catch (err) {
    if (err instanceof Error) {
      toast.warn(err.message.includes('network') ? NOTIFICATIONS[language].networkAccess : NOTIFICATIONS[language].failureLogin);
    }
  }
}

export async function registerWithEmailAndPassword(name: string, email: string, password: string, language: LANGUAGES) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    toast.success(NOTIFICATIONS[language].successRegistration);
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
}

export async function sendPasswordReset(email: string, language: LANGUAGES) {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success(NOTIFICATIONS[language].passwordResetHasBeenSent);
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
}

export function logOut(language: LANGUAGES) {
  try {
    signOut(auth);
  } catch (error) {
    toast.error(NOTIFICATIONS[language].networkAccess);
  }
}
