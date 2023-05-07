import { AUTH_PLACES } from './const';

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
