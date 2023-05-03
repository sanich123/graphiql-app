import { handleSetState } from '@/utils/auth-utils';
import { InputNameProps } from '../input-name/input-name';

export default function InputEmail({ value, setStateFn, className }: InputNameProps) {
  return <input type="email" className={className} value={value} onChange={handleSetState(setStateFn)} placeholder="E-mail Address" />;
}
