import { handleSetState } from '@/utils/auth-utils';

export type InputNameProps = {
  setStateFn: (arg: string) => void;
  value: string;
};

export default function InputName({ setStateFn, value }: InputNameProps) {
  return (
    <input
      type="text"
      value={value}
      className="auth-wrapper__form--input"
      onChange={handleSetState(setStateFn)}
      placeholder="Full Name"
      name="name"
      pattern="[A-Z]{1,}[\w]{1,}"
      title="Имя должно начинаться с латинской большой буквы"
      required
    />
  );
}
