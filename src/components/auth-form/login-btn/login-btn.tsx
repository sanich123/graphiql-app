import { ObjectWithStrings } from '@/types/types';
import { LOGIN_BTN_TEXTS } from '@/utils/const';

export default function LoginBtn({ place }: ObjectWithStrings) {
  return (
    <button type="submit" className="auth-wrapper__form--btn">
      {LOGIN_BTN_TEXTS[place as keyof typeof LOGIN_BTN_TEXTS]}
    </button>
  );
}
