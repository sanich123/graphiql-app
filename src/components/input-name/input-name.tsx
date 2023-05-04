import { handleSetState } from '@/utils/auth-utils';
import React from 'react';

export type InputNameProps = {
  setStateFn: (arg: string) => void;
  value: string;
  className: string;
};

export default function InputName({ setStateFn, value, className }: InputNameProps) {
  return (
    <input
      type="text"
      value={value}
      className={className}
      onChange={handleSetState(setStateFn)}
      placeholder="Full Name"
      name="name"
      pattern="[A-ZА-Я]{1,}[\w]{1,}"
      title="Имя должно начинаться с большой буквы"
      required
    />
  );
}
