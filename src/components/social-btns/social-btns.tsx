import { signInWithSocialNetwork } from '@/firebase/social-auth';
import { SOCIAL_NETWORKS_ARR } from '../../utils/const';
import { useAppSelector } from '@/redux/hooks/hooks';

export default function SocialBtns() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <>
      {SOCIAL_NETWORKS_ARR.map((socialNetwork) => (
        <button key={socialNetwork} className="auth-wrapper__form--btn social-btn" onClick={() => signInWithSocialNetwork(socialNetwork)}>
          {`${language === 'ru' ? 'Залогинься с ' : 'Login with'}  ${socialNetwork}`}
        </button>
      ))}
    </>
  );
}
