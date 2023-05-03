import Loader from '../components/loader/loader';
import styles from '../styles/login.module.scss';
import { useAuth } from '@/hooks/use-auth';
import LoginBtn from '@/components/login-btn/login-btn';
import LoginGoogle from '@/components/login-google/login-google';
import InputName from '@/components/input-name/input-name';
import InputEmail from '@/components/input-email/input-email';
import InputPassword from '@/components/input-password/input-password';
import ResetBtn from '@/components/reset-btn/reset-btn';
import ResetPasswordBtn from '@/components/reset-password-btn/reset-password-btn';
import RegisterBtn from '@/components/register-btn/register-btn';
import ToLoginBtn from '@/components/to-login-btn/to-login-btn';

export default function Login() {
  const { login, loginContainer, loginTextBox, resetBtn, registerTextBox } = styles;
  const { email, password, name, isForgetPassword, isRegistered, setIsForgetPassword, setIsRegistered, setName, setEmail, setPassword, loading } = useAuth();

  return (
    <div className={login}>
      <div className={loginContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {isRegistered && !isForgetPassword && <InputName setStateFn={setName} value={name} className={registerTextBox} />}
            <InputEmail setStateFn={setEmail} value={email} className={loginTextBox} />
            {!isForgetPassword && (
              <>
                <InputPassword setStateFn={setPassword} value={password} className={loginTextBox} />
                <LoginBtn email={email} password={password} isRegistered={isRegistered} />
                <LoginGoogle isRegistered={isRegistered} />
              </>
            )}
            <div>
              {!isForgetPassword && !isRegistered && <ResetBtn setIsForgetPassword={setIsForgetPassword} />}
              {isForgetPassword && <ResetPasswordBtn className={resetBtn} email={email} />}
            </div>
            <div>
              {(isForgetPassword || !isRegistered) && <RegisterBtn setIsForgetPassword={setIsForgetPassword} setIsRegistered={setIsRegistered} />}
              {isRegistered && !isForgetPassword && <ToLoginBtn setIsForgetPassword={setIsForgetPassword} setIsRegistered={setIsRegistered} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
