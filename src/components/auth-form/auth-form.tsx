import { handleSetState, handleSubmitForm } from '@/utils/auth-utils';
import { useAuth } from '@/hooks/use-auth';
import { AUTH_INPUTS, AUTH_PLACES, LANGUAGES, LOGIN_BTN_TEXTS } from '@/utils/const';
import { Dispatch, SetStateAction } from 'react';
import { filterInputs } from '@/utils/helpers';
import { useAppSelector } from '@/redux/hooks/hooks';

export default function AuthForm({ place }: { place: AUTH_PLACES }) {
  const { language }: { language: LANGUAGES } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { email, password, name, setName, setEmail, setPassword } = useAuth();
  const setStateObj = { email: [email, setEmail], name: [name, setName], password: [password, setPassword] };

  return (
    <form className="auth-wrapper__form" onSubmit={handleSubmitForm(name, email, password, place, language)}>
      {AUTH_INPUTS.filter(filterInputs(place)).map(({ type, placeholder, name: inputName, pattern, title, autoComplete }) => {
        const value = setStateObj[inputName as keyof typeof setStateObj][0];
        const fn = setStateObj[inputName as keyof typeof setStateObj][1] as Dispatch<SetStateAction<string>>;
        return (
          <input
            key={inputName}
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
            autoFocus={inputName === 'email'}
          />
        );
      })}
      <button type="submit" className="auth-wrapper__form--btn">
        {LOGIN_BTN_TEXTS[place]}
      </button>
    </form>
  );
}
