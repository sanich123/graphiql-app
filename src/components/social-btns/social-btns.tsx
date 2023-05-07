import { signInWithSocialNetwork } from '@/firebase/social-auth';
import { SOCIAL_NETWORKS_ARR } from '../../utils/const';

export default function SocialBtns() {
  return (
    <>
      {SOCIAL_NETWORKS_ARR.map((socialNetwork) => (
        <button key={socialNetwork} className="auth-wrapper__form--btn social-btn" onClick={() => signInWithSocialNetwork(socialNetwork)}>
          {`Login with ${socialNetwork}`}
        </button>
      ))}
    </>
  );
}
