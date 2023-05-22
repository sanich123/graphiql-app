import { handleSetState, handleSubmitForm } from '@/utils/auth-utils';
import { useAuth } from '@/hooks/use-auth';
import { AUTH_INPUTS, AUTH_PLACES } from '@/utils/const';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { changeBtnText, filterInputs } from '@/utils/helpers';
import { useAppSelector } from '@/redux/hooks/hooks';

export default function AuthForm({ place }: { place: AUTH_PLACES }) {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const { email, password, name, setName, setEmail, setPassword } = useAuth();
  const setStateObj = { email: [email, setEmail], name: [name, setName], password: [password, setPassword] };

  return (
    <form className="auth-wrapper__form" onSubmit={handleSubmitForm(name, email, password, place, language)}>
      {AUTH_INPUTS[language].filter(filterInputs(place)).map(({ type, placeholder, name: inputName, pattern, title, autoComplete }) => {
        const value = setStateObj[inputName as keyof typeof setStateObj][0];
        const fn = setStateObj[inputName as keyof typeof setStateObj][1] as Dispatch<SetStateAction<string>>;
        return (
          <input
            key={inputName}
            type={type}
            value={value.toString()}
            className="auth-wrapper__form--input"
            onChange={handleSetState(fn)}
            onInput={({ target: { value: errorValue } }: ChangeEvent<HTMLInputElement>) => {
              if (errorValue === 'Привет!') {
                throw new Error('Произошла ошибка!');
              }
            }}
            placeholder={placeholder}
            name={inputName}
            pattern={pattern}
            title={title}
            required
            autoComplete={autoComplete}
            autoFocus={inputName === 'email'}
            data-cy={`input-${inputName}`}
          />
        );
      })}
      <button type="submit" className="auth-wrapper__form--btn submit-btn">
        {changeBtnText(place, language)}
      </button>
    </form>
  );
}
