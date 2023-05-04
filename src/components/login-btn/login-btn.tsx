import { logInWithEmailAndPassword } from '@/firebase/email-auth';
import styles from '../../styles/login.module.scss';

type LoginBtnProps = {
  email: string;
  isRegisterOpen: boolean;
  password: string;
};

export default function LoginBtn({ email, password, isRegisterOpen }: LoginBtnProps) {
  const { loginBtn } = styles;
  return (
    <button type="submit" className={loginBtn} onClick={() => logInWithEmailAndPassword(email, password)}>
      {isRegisterOpen ? 'Register' : 'Login'}
    </button>
  );
}
