import { signInWithGoogle } from '@/firebase/google-auth';

export default function LoginGoogle() {
  return (
    <button className={'auth-wrapper__form--btn social-btn'} onClick={signInWithGoogle}>
      Login with Google
    </button>
  );
}
