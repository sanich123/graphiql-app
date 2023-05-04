import { textChanger } from '@/utils/helpers';

type LoginBtnProps = {
  [key: string]: boolean;
};

export default function LoginBtn({ isRegisterOpen, isResetOpen }: LoginBtnProps) {
  return (
    <button type="submit" className="auth-wrapper__form--btn">
      {textChanger(isRegisterOpen, isResetOpen)}
    </button>
  );
}
