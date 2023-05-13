import { signInWithSocialNetwork } from '@/firebase/social-auth';
import { SOCIAL_NETWORKS_ARR } from '../../utils/const';
import { useAppSelector } from '@/redux/hooks/hooks';
import { GithubIcon, GoogleIcon } from '../svg/svg';

export default function SocialBtns() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <>
      {SOCIAL_NETWORKS_ARR.map((socialNetwork) => (
        <button key={socialNetwork} className="auth-wrapper__form--btn social-btn" onClick={() => signInWithSocialNetwork(socialNetwork)}>
          <span className="social-btn__logo">{socialNetwork === 'Google' ? <GoogleIcon /> : <GithubIcon />}</span>
          <div className="social-btn__text">{`${language === 'ru' ? 'Залогинься с ' : 'Login with'}  ${socialNetwork}`}</div>
        </button>
      ))}
    </>
  );
}
