import LoginBtn from './login-btn/login-btn';
import { handleSetState, handleSubmitForm } from '@/utils/auth-utils';
import { useAuth } from '@/hooks/use-auth';
import { AUTH_INPUTS, AUTH_PLACES } from '@/utils/const';
import { Dispatch, SetStateAction } from 'react';

type AuthFormProps = {
  place: string;
};

export default function AuthForm({ place }: AuthFormProps) {
  const { email, password, name, setName, setEmail, setPassword } = useAuth();
  const setStateObj = { email: [email, setEmail], name: [name, setName], password: [password, setPassword] };

  return (
    <form className="auth-wrapper__form" onSubmit={handleSubmitForm(name, email, password, place)}>
      {AUTH_INPUTS.map(({ type, placeholder, name: inputName, pattern, title, autoComplete }) => {
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
      {/* {place === AUTH_PLACES.register && (
        <input
          type="text"
          value={name}
          className="auth-wrapper__form--input"
          onChange={handleSetState(setName)}
          placeholder="Full Name"
          name="name"
          pattern="[A-Z]{1,}[\w]{1,}"
          title="Имя должно начинаться с латинской большой буквы"
          required
          autoComplete="username"
        />
      )}
      <input
        type="email"
        className="auth-wrapper__form--input"
        value={email}
        onChange={handleSetState(setEmail)}
        placeholder="E-mail Address"
        name="email"
        required
        pattern="^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})"
        title="Ваш email должен соответствовать паттерну ^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})"
        autoComplete="email"
      />
      {place !== AUTH_PLACES.reset && (
        <input
          type="password"
          className="auth-wrapper__form--input"
          value={password}
          onChange={handleSetState(setPassword)}
          placeholder="Password"
          name="password"
          pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}"
          title="Пароль должен соответствовать паттерну (?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}"
          autoComplete="current-password"
          required
        />
      )} */}
      <LoginBtn place={place} />
    </form>
  );
}
