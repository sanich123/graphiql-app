import Loader from '../components/loader/loader';
import styles from '../styles/login.module.scss';
import { useAuth } from '@/hooks/use-auth';
import ResetBtn from '@/components/reset-btn/reset-btn';
import RegisterBtn from '@/components/register-btn/register-btn';
import ToLoginBtn from '@/components/to-login-btn/to-login-btn';
import AuthForm from '@/components/auth-form/auth-form';
import LoginGoogle from '@/components/login-google/login-google';
import SocialBtns from '@/components/social-btns/social-btns';

export default function Login() {
  const { login, loginContainer } = styles;
  const { email, password, name, isResetOpen, setIsResetOpen, isRegisterOpen, setIsRegisterOpen, setName, setEmail, setPassword, loading } = useAuth();

  return (
    <div className={login}>
      <div className={loginContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <AuthForm
              isRegisterOpen={isRegisterOpen}
              isResetOpen={isResetOpen}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              name={name}
              password={password}
              email={email}
            />
            {!isRegisterOpen && !isResetOpen && <SocialBtns />}

            <div>
              {!isResetOpen && !isRegisterOpen && <ResetBtn setIsResetOpen={setIsResetOpen} />}
              {(isResetOpen || !isRegisterOpen) && <RegisterBtn setIsResetOpen={setIsResetOpen} setIsRegisterOpen={setIsRegisterOpen} />}
              {isRegisterOpen && !isResetOpen && <ToLoginBtn setIsResetOpen={setIsResetOpen} setIsRegisterOpen={setIsRegisterOpen} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
