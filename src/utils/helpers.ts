import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AUTH_NAV_BTNS_TEXT, SOCIAL_NETWORKS } from './const';

export function textChanger(isRegisterOpen: boolean, isResetOpen: boolean) {
  if (isRegisterOpen) {
    return 'Register';
  } else if (isResetOpen) {
    return 'Send password reset email';
  } else {
    return 'Login';
  }
}

export function socialMediaProviderChecker(provider: string) {
  if (provider === SOCIAL_NETWORKS.github) {
    return new GithubAuthProvider();
  } else {
    return new GoogleAuthProvider();
  }
}

export function filterBtns(reset: boolean, register: boolean) {
  if (!register && !reset) {
    return AUTH_NAV_BTNS_TEXT;
  } else if (register && !reset) {
    return AUTH_NAV_BTNS_TEXT.filter(({ btnText }) => btnText === 'Login');
  } else if (reset || !register) {
    return AUTH_NAV_BTNS_TEXT.filter(({ btnText }) => btnText === 'Register');
  } else {
    return [];
  }
}
