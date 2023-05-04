import InputEmail from '../input-email/input-email';
import InputName from '../input-name/input-name';
import InputPassword from '../input-password/input-password';
import LoginBtn from '../login-btn/login-btn';
import styles from '../../styles/login.module.scss';
import { handleSubmitForm } from '@/utils/auth-utils';

type AuthFormProps = {
  isRegisterOpen: boolean;
  isResetOpen: boolean;
  setName: (arg: string) => void;
  setEmail: (arg: string) => void;
  setPassword: (arg: string) => void;
  name: string;
  password: string;
  email: string;
};

export default function AuthForm({ isRegisterOpen, isResetOpen, setName, setEmail, setPassword, name, password, email }: AuthFormProps) {
  const { registerTextBox, loginTextBox, formLayout } = styles;
  return (
    <form className={formLayout} onSubmit={handleSubmitForm(name, email, password, isRegisterOpen, isResetOpen)}>
      {isRegisterOpen && !isResetOpen && <InputName setStateFn={setName} value={name} className={registerTextBox} />}
      <InputEmail setStateFn={setEmail} value={email} className={loginTextBox} />
      {!isResetOpen && <InputPassword setStateFn={setPassword} value={password} className={loginTextBox} />}
      {<LoginBtn isRegisterOpen={isRegisterOpen} isResetOpen={isResetOpen} />}
    </form>
  );
}
