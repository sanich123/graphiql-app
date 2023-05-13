import { useState } from 'react';
import AuthForm from '@/components/auth-form/auth-form';
import SocialBtns from '@/components/social-btns/social-btns';
import AuthNavigateBtns from '@/components/auth-navigate-btns/auth-navigate-btns';
import { AUTH_PLACES } from '@/utils/const';
import { useAppSelector } from '@/redux/hooks/hooks';

export default function Login() {
  const [place, setPlace] = useState(AUTH_PLACES.login);
  const { theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <div className={`authorization--wrapper ${theme}`}>
      <div className={`authorization ${theme}`}>
        <div className="authorization__wrapper auth-wrapper">
          <AuthForm place={place} />
          {place === AUTH_PLACES.login && <SocialBtns />}
          <AuthNavigateBtns place={place} setPlace={setPlace} />
        </div>
      </div>
    </div>
  );
}
