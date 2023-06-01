import { AUTH_PLACES, AUTH_PLACES_RU, LANGUAGES } from './const';

export function filterBtns(place: AUTH_PLACES) {
  return ({ value }: { value: AUTH_PLACES }) => {
    if (place === AUTH_PLACES.register) {
      return value === AUTH_PLACES.login;
    } else if (place === AUTH_PLACES.reset) {
      return value === AUTH_PLACES.register;
    }
    return value;
  };
}

export function filterInputs(place: AUTH_PLACES) {
  return ({ name }: { name: string }) => {
    if (place === AUTH_PLACES.login) {
      return name !== 'name';
    } else if (place === AUTH_PLACES.reset) {
      return name === 'email';
    }
    return name;
  };
}
export function changeBtnText(place: AUTH_PLACES, language: LANGUAGES) {
  if (place === AUTH_PLACES.login) {
    if (language === LANGUAGES.ru) {
      return AUTH_PLACES_RU.login;
    } else {
      return AUTH_PLACES.login;
    }
  } else if (place === AUTH_PLACES.register) {
    if (language === LANGUAGES.ru) {
      return AUTH_PLACES_RU.register;
    } else {
      return AUTH_PLACES.register;
    }
  } else if (place === AUTH_PLACES.reset) {
    if (language === LANGUAGES.ru) {
      return AUTH_PLACES_RU.reset;
    } else {
      return AUTH_PLACES.reset;
    }
  }
}
