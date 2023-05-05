import LoginBtn from './login-btn/login-btn';
import { handleSetState, handleSubmitForm } from '@/utils/auth-utils';
import { useAuth } from '@/hooks/use-auth';
import { AUTH_INPUTS } from '@/utils/const';
import { Dispatch, SetStateAction } from 'react';
import { filterInputs } from '@/utils/helpers';

type AuthFormProps = {
  place: string;
};

export default function AuthForm({ place }: AuthFormProps) {
  const { email, password, name, setName, setEmail, setPassword } = useAuth();
  const setStateObj = { email: [email, setEmail], name: [name, setName], password: [password, setPassword] };

  return (
    <form className="auth-wrapper__form" onSubmit={handleSubmitForm(name, email, password, place)}>
      {AUTH_INPUTS.filter(filterInputs(place)).map(({ type, placeholder, name: inputName, pattern, title, autoComplete }) => {
        const value = setStateObj[inputName as keyof typeof setStateObj][0];
        const fn = setStateObj[inputName as keyof typeof setStateObj][1] as Dispatch<SetStateAction<string>>;
        return (
          <input
            key={name}
            type={type}
            value={value.toString()}
            className="auth-wrapper__form--input"
            onChange={handleSetState(fn)}
            placeholder={placeholder}
            name={inputName}
            pattern={pattern}
            title={title}
            required
            autoComplete={autoComplete}
          />
        );
      })}
      <LoginBtn place={place} />
    </form>
  );
}
