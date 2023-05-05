import InputEmail from './input-email/input-email';
import InputName from './input-name/input-name';
import InputPassword from './input-password/input-password';
import LoginBtn from './login-btn/login-btn';
import { handleSubmitForm } from '@/utils/auth-utils';
import { useAuth } from '@/hooks/use-auth';

type AuthFormProps = {
  isRegisterOpen: boolean;
  isResetOpen: boolean;
};

export default function AuthForm({ isRegisterOpen, isResetOpen }: AuthFormProps) {
  const { email, password, name, setName, setEmail, setPassword } = useAuth();
  return (
    <form className="auth-wrapper__form" onSubmit={handleSubmitForm(name, email, password, isRegisterOpen, isResetOpen)}>
      {isRegisterOpen && !isResetOpen && <InputName setStateFn={setName} value={name} />}
      <InputEmail setStateFn={setEmail} value={email} />
      {!isResetOpen && <InputPassword setStateFn={setPassword} value={password} />}
      <LoginBtn isRegisterOpen={isRegisterOpen} isResetOpen={isResetOpen} />
    </form>
  );
}
