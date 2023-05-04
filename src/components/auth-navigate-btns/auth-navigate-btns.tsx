import RegisterBtn from './register-btn/register-btn';
import ResetBtn from './reset-btn/reset-btn';
import ToLoginBtn from './to-login-btn/to-login-btn';

type AuthNavigateBtnsProps = {
  isResetOpen: boolean;
  isRegisterOpen: boolean;
  setIsResetOpen: (arg: boolean) => void;
  setIsRegisterOpen: (arg: boolean) => void;
};

export default function AuthNavigateBtns({ isResetOpen, isRegisterOpen, setIsResetOpen, setIsRegisterOpen }: AuthNavigateBtnsProps) {
  return (
    <div className="auth-wrapper__nav-btns">
      {!isResetOpen && !isRegisterOpen && <ResetBtn setIsResetOpen={setIsResetOpen} />}
      {(isResetOpen || !isRegisterOpen) && <RegisterBtn setIsResetOpen={setIsResetOpen} setIsRegisterOpen={setIsRegisterOpen} />}
      {isRegisterOpen && !isResetOpen && <ToLoginBtn setIsResetOpen={setIsResetOpen} setIsRegisterOpen={setIsRegisterOpen} />}
    </div>
  );
}
