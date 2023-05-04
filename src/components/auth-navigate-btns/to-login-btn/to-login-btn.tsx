import { RegisterBtnProps } from '../register-btn/register-btn';

export default function ToLoginBtn({ setIsResetOpen, setIsRegisterOpen }: RegisterBtnProps) {
  return (
    <div className="btns-wrapper">
      <div>{'Have an account? '}</div>
      <button
        type="button"
        onClick={() => {
          setIsResetOpen(false);
          setIsRegisterOpen(false);
        }}
        className="btns-wrapper__nav-btn"
      >
        Login
      </button>
    </div>
  );
}
