import { handleSetState } from '@/utils/auth-utils';
import { InputNameProps } from '../input-name/input-name';

export default function InputPassword({ value, setStateFn, className }: InputNameProps) {
  return (
    <input
      type="password"
      className={className}
      value={value}
      onChange={handleSetState(setStateFn)}
      placeholder="Password"
      name="password"
      pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}"
      title="Пароль должен соответствовать паттерну (?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}"
      autoComplete="current-password"
      required
    />
  );
}
