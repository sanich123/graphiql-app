import { handleSetState } from '@/utils/auth-utils';

type InputProps = {
  value: string;
  placeholder: string;
  type: string;
  setStateFn: (arg: string) => void;
  className: string;
};

export default function Input({ value, type, placeholder, setStateFn, className }: InputProps) {
  return <input type={type} className={className} value={value} onChange={handleSetState(setStateFn)} placeholder={placeholder} />;
}
