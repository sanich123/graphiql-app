import { signInWithSocialNetwork } from '@/firebase/social-auth';
import { SOCIAL_NETWORKS } from '../../utils/const';

export default function SocialBtns() {
  return (
    <>
      {Object.values(SOCIAL_NETWORKS).map((socialNetwork) => (
        <button key={socialNetwork} className="auth-wrapper__form--btn social-btn" onClick={() => signInWithSocialNetwork(socialNetwork)}>
          {`Login with ${socialNetwork}`}
        </button>
      ))}
    </>
  );
}
