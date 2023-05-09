import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export const enum SOCIAL_NETWORKS {
  github = 'Github',
  google = 'Google',
}
export const SOCIAL_NETWORKS_ARR = [SOCIAL_NETWORKS.google, SOCIAL_NETWORKS.github];
export const enum AUTH_PLACES {
  login = 'Login',
  register = 'Register',
  reset = 'Reset',
}
export const AUTH_NAV_BTNS_TEXT = [
  // eslint-disable-next-line quotes
  { phrase: `Don't have an account?`, btnText: AUTH_PLACES.register },
  {
    phrase: 'Forgot the password?',
    btnText: AUTH_PLACES.reset,
  },
  {
    phrase: 'Have an account?',
    btnText: AUTH_PLACES.login,
  },
];

export const AUTH_INPUTS = [
  {
    type: 'text',
    placeholder: 'Full name',
    name: 'name',
    pattern: '[A-Z]{1,}[\\w]{1,}',
    title: 'Имя должно начинаться с латинской большой буквы',
    autoComplete: 'username',
  },
  {
    type: 'email',
    placeholder: 'E-mail address',
    name: 'email',
    pattern: '^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
    title: 'Ваш email должен соответствовать паттерну ^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
    autoComplete: 'email',
  },
  {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    pattern: '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
    title: 'Пароль должен соответствовать паттерну (?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
    autoComplete: 'current-password',
  },
];

export const LOGIN_BTN_TEXTS = {
  Login: AUTH_PLACES.login,
  Register: AUTH_PLACES.register,
  Reset: 'Send password reset email',
} as const;

export const SOCIAL_NETWORKS_PROVIDERS = {
  Github: new GithubAuthProvider(),
  Google: new GoogleAuthProvider(),
} as const;

export const enum LANGUAGES {
  ru = 'ru',
  en = 'en',
}

export const enum THEMES {
  dark = 'dark',
  light = 'light',
}

export const enum ROUTES {
  main = '/',
  login = '/login',
  graphiql = '/graphiql',
}

export const enum COLORS {
  almostBlack = '#161D25',
  white = 'white',
}

export const DEVELOPERS = [
  {
    name: 'irinaiid',
    github: 'https://github.com/IrinaIID',
  },
  {
    name: 'sanich123',
    github: 'https://github.com/sanich123',
  },
  {
    name: 'predmaxim',
    github: 'https://github.com/predmaxim',
  },
];
