import { logInWithEmailAndPassword } from '@/firebase/email-auth';
import styles from '../../styles/login.module.scss';

type LoginBtnProps = {
  email: string;
  isRegistered: boolean;
  password: string;
};

export default function LoginBtn({ email, password, isRegistered }: LoginBtnProps) {
  const { loginBtn } = styles;
  return (
    <button className={loginBtn} onClick={() => logInWithEmailAndPassword(email, password)}>
      {isRegistered ? 'Register' : 'Login'}
    </button>
  );
}
