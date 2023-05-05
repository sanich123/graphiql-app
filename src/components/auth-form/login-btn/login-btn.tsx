import { textChanger } from '@/utils/helpers';

type LoginBtnProps = {
  [key: string]: string;
};

export default function LoginBtn({ place }: LoginBtnProps) {
  return (
    <button type="submit" className="auth-wrapper__form--btn">
      {textChanger(place)}
    </button>
  );
}
