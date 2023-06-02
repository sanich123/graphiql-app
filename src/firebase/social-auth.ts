import { signInWithPopup } from 'firebase/auth';
import { query, getDocs, collection, where, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';
import { SOCIAL_NETWORKS, SOCIAL_NETWORKS_PROVIDERS } from '@/constants/const';

export async function signInWithSocialNetwork(provider: SOCIAL_NETWORKS.google | SOCIAL_NETWORKS.github) {
  try {
    const { user } = await signInWithPopup(auth, SOCIAL_NETWORKS_PROVIDERS[provider]);
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: provider === SOCIAL_NETWORKS.github ? 'github' : 'google',
        email: user.email,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      toast.warn(err.message);
    }
  }
}
