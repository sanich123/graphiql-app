import { handleSetState } from '@/utils/auth-utils';
import { InputNameProps } from '../input-name/input-name';

export default function InputEmail({ value, setStateFn, className }: InputNameProps) {
  return (
    <input
      type="email"
      className={className}
      value={value}
      onChange={handleSetState(setStateFn)}
      placeholder="E-mail Address"
      name="email"
      required
      pattern="^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})"
      title="Ваш email должен соответствовать паттерну ^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})"
    />
  );
}
