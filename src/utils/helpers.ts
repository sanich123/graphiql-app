import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AUTH_NAV_BTNS_TEXT, AUTH_PLACES, SOCIAL_NETWORKS } from './const';

export function textChanger(place: string) {
  if (place === AUTH_PLACES.register) {
    return AUTH_PLACES.register;
  } else if (place === AUTH_PLACES.reset) {
    return 'Send password reset email';
  } else {
    return AUTH_PLACES.login;
  }
}

export function socialMediaProviderChecker(provider: string) {
  if (provider === SOCIAL_NETWORKS.github) {
    return new GithubAuthProvider();
  } else {
    return new GoogleAuthProvider();
  }
}

export function filterBtns(place: string) {
  if (place === AUTH_PLACES.register) {
    return AUTH_NAV_BTNS_TEXT.filter(({ btnText }) => btnText === AUTH_PLACES.login);
  } else if (place === AUTH_PLACES.reset) {
    return AUTH_NAV_BTNS_TEXT.filter(({ btnText }) => btnText === AUTH_PLACES.register);
  } else {
    return AUTH_NAV_BTNS_TEXT;
  }
}
