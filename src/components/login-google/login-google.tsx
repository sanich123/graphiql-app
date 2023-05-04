import { signInWithGoogle } from '@/firebase/google-auth';
import styles from '../../styles/login.module.scss';

export default function LoginGoogle() {
  const { loginBtn, loginGoogle } = styles;
  return (
    <button className={`${loginBtn} ${loginGoogle}`} onClick={signInWithGoogle}>
      {'Login with Google'}
    </button>
  );
}
