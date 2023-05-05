import { useState } from 'react';
import AuthForm from '@/components/auth-form/auth-form';
import SocialBtns from '@/components/social-btns/social-btns';
import AuthNavigateBtns from '@/components/auth-navigate-btns/auth-navigate-btns';
import Header from '@/components/header/header';

export default function Login() {
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="authorization">
        <div className="authorization__wrapper auth-wrapper">
          <AuthForm isRegisterOpen={isRegisterOpen} isResetOpen={isResetOpen} />
          {!isRegisterOpen && !isResetOpen && <SocialBtns />}
          <AuthNavigateBtns isResetOpen={isResetOpen} isRegisterOpen={isRegisterOpen} setIsResetOpen={setIsResetOpen} setIsRegisterOpen={setIsRegisterOpen} />
        </div>
      </div>
    </>
  );
}
