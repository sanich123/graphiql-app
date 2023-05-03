import { RegisterBtnProps } from '../register-btn/register-btn';

export default function ToLoginBtn({ setIsForgetPassword, setIsRegistered }: RegisterBtnProps) {
  return (
    <>
      {'Already have an account? '}
      <button
        type="button"
        onClick={() => {
          setIsForgetPassword(false);
          setIsRegistered(false);
        }}
      >
        Login
      </button>
    </>
  );
}
