import { signInWithSocialNetwork } from '@/firebase/social-auth';
import { LANGUAGES, SOCIAL_NETWORKS } from '../../constants/enums';
import { useAppSelector } from '@/redux/hooks/hooks';
import { GithubIcon, GoogleIcon } from '../svg/svg';
import { SOCIAL_NETWORKS_ARR } from '@/constants/const';

export default function SocialBtns() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <>
      {SOCIAL_NETWORKS_ARR.map((socialNetwork) => (
        <button key={socialNetwork} className="auth-wrapper__form--btn social-btn" onClick={() => signInWithSocialNetwork(socialNetwork)}>
          <span className="social-btn__logo">{socialNetwork === SOCIAL_NETWORKS.google ? <GoogleIcon /> : <GithubIcon />}</span>
          <div className="social-btn__text">{`${language === LANGUAGES.ru ? 'Залогинься с ' : 'Login with'}  ${socialNetwork}`}</div>
        </button>
      ))}
    </>
  );
}
