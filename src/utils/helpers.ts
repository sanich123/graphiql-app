import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AUTH_PLACES, SOCIAL_NETWORKS } from './const';

export function socialMediaProviderChecker(provider: string) {
  if (provider === SOCIAL_NETWORKS.github) {
    return new GithubAuthProvider();
  } else {
    return new GoogleAuthProvider();
  }
}

export function filterBtns(place: string) {
  return ({ btnText }: { btnText: string }) => {
    if (place === AUTH_PLACES.register) {
      return btnText === AUTH_PLACES.login;
    } else if (place === AUTH_PLACES.reset) {
      return btnText === AUTH_PLACES.register;
    }
    return btnText;
  };
}

export function filterInputs(place: string) {
  return ({ name }: { name: string }) => {
    if (place === AUTH_PLACES.login) {
      return name !== 'name';
    } else if (place === AUTH_PLACES.reset) {
      return name === 'email';
    }
    return name;
  };
}
