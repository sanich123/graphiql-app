import styles from '../../styles/login.module.scss';

type LoginBtnProps = {
  [key: string]: boolean;
};

export default function LoginBtn({ isRegisterOpen, isResetOpen }: LoginBtnProps) {
  const { loginBtn } = styles;
  let btnName;
  if (isRegisterOpen) {
    btnName = 'Register';
  } else if (isResetOpen) {
    btnName = 'Send password reset email';
  } else {
    btnName = 'Login';
  }

  return (
    <button type="submit" className={loginBtn}>
      {btnName}
    </button>
  );
}
