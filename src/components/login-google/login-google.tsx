import { signInWithGoogle } from '@/firebase/google-auth';
import styles from '../../styles/login.module.scss';

export default function LoginGoogle({ isRegistered }: { isRegistered: boolean }) {
  const { loginBtn, loginGoogle } = styles;
  return (
    <button className={`${loginBtn} ${loginGoogle}`} onClick={signInWithGoogle}>
      {`${isRegistered ? 'Register' : 'Login'} with Google`}
    </button>
  );
}
