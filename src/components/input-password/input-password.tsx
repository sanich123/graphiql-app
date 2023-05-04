import { handleSetState } from '@/utils/auth-utils';
import { InputNameProps } from '../input-name/input-name';

export default function InputPassword({ value, setStateFn, className }: InputNameProps) {
  return <input type="password" className={className} value={value} onChange={handleSetState(setStateFn)} placeholder="Password" name="password" />;
}
