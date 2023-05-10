import { useState } from 'react';
import AuthForm from '@/components/auth-form/auth-form';
import SocialBtns from '@/components/social-btns/social-btns';
import AuthNavigateBtns from '@/components/auth-navigate-btns/auth-navigate-btns';
import { AUTH_PLACES } from '@/utils/const';

export default function Login() {
  const [place, setPlace] = useState(AUTH_PLACES.login);
  return (
    <div className="authorization">
      <div className="authorization__wrapper auth-wrapper">
        <AuthForm place={place} />
        {place === AUTH_PLACES.login && <SocialBtns />}
        <AuthNavigateBtns place={place} setPlace={setPlace} />
      </div>
    </div>
  );
}
