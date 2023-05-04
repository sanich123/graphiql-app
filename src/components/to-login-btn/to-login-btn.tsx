import { RegisterBtnProps } from '../register-btn/register-btn';

export default function ToLoginBtn({ setIsResetOpen, setIsRegisterOpen }: RegisterBtnProps) {
  return (
    <>
      {'Already have an account? '}
      <button
        type="button"
        onClick={() => {
          setIsResetOpen(false);
          setIsRegisterOpen(false);
        }}
      >
        Login
      </button>
    </>
  );
}
