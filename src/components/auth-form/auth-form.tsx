import InputEmail from '../input-email/input-email';
import InputName from '../input-name/input-name';
import InputPassword from '../input-password/input-password';
import LoginBtn from '../login-btn/login-btn';
import styles from '../../styles/login.module.scss';

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
  const { registerTextBox, loginTextBox } = styles;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // console.log(formData);
      }}
    >
      {isRegisterOpen && !isResetOpen && <InputName setStateFn={setName} value={name} className={registerTextBox} />}
      <InputEmail setStateFn={setEmail} value={email} className={loginTextBox} />
      {!isResetOpen && <InputPassword setStateFn={setPassword} value={password} className={loginTextBox} />}
      <LoginBtn email={email} password={password} isRegisterOpen={isRegisterOpen} />
    </form>
  );
}
