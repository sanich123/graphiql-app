import { handleSetState } from '@/utils/auth-utils';
import React from 'react';
export type InputNameProps = {
  setStateFn: (arg: string) => void;
  value: string;
  className: string;
};
export default function InputName({ setStateFn, value, className }: InputNameProps) {
  return <input type="text" value={value} className={className} onChange={handleSetState(setStateFn)} placeholder="Full Name" name="name" />;
}
