import { ChangeEvent } from 'react';

export function handleSetState(setStateFn: (arg: string) => void) {
  return ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setStateFn(value);
  };
}
