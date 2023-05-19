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

export const enum AUTH_PLACES_RU {
  login = 'Логин',
  register = 'Регистрация',
  reset = 'Сброс',
}

export const AUTH_NAV_BTNS_TEXT = {
  en: [
    // eslint-disable-next-line quotes
    { phrase: `Don't have an account?`, btnText: AUTH_PLACES.register, value: AUTH_PLACES.register },
    {
      phrase: 'Forgot the password?',
      btnText: AUTH_PLACES.reset,
      value: AUTH_PLACES.reset,
    },
    {
      phrase: 'Have an account?',
      btnText: AUTH_PLACES.login,
      value: AUTH_PLACES.login,
    },
  ],
  ru: [
    // eslint-disable-next-line quotes
    { phrase: 'Нет аккаунта?', btnText: AUTH_PLACES_RU.register, value: AUTH_PLACES.register },
    {
      phrase: 'Забыл пароль? Лошара',
      btnText: AUTH_PLACES_RU.reset,
      value: AUTH_PLACES.reset,
    },
    {
      phrase: 'Есть аккаунт?',
      btnText: AUTH_PLACES_RU.login,
      value: AUTH_PLACES.login,
    },
  ],
};

export const AUTH_INPUTS = {
  ru: [
    {
      type: 'text',
      placeholder: 'Ваше имя',
      name: 'name',
      pattern: '[A-Z]{1,}[\\w]{1,}',
      title: 'Имя должно начинаться с латинской большой буквы',
      autoComplete: 'username',
    },
    {
      type: 'email',
      placeholder: 'Электропочта',
      name: 'email',
      pattern: '^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
      title: 'Ваш email должен соответствовать паттерну ^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
      autoComplete: 'email',
    },
    {
      type: 'password',
      placeholder: 'Пароль',
      name: 'password',
      pattern: '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
      title: 'Минимум 8 символов, одна цифра, одна буква и один специальный символ (?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}',
      autoComplete: 'current-password',
    },
  ],
  en: [
    {
      type: 'text',
      placeholder: 'Full name',
      name: 'name',
      pattern: '[A-Z]{1,}[\\w]{1,}',
      title: 'Your name should begin from the capital letter',
      autoComplete: 'username',
    },
    {
      type: 'email',
      placeholder: 'E-mail address',
      name: 'email',
      pattern: '^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
      title: 'Your email should be like ^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
      autoComplete: 'email',
    },
    {
      type: 'password',
      placeholder: 'Password',
      name: 'password',
      pattern: '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
      title:
        'minimum 8 symbols, at least one capital letter, one digit, one special character (?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
      autoComplete: 'current-password',
    },
  ],
};

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

export const LINKS = {
  'Requests to any API': 'https://www.youtube.com/embed/VlrYuRDKQBo',
  'Syntax highlighting': 'https://www.youtube.com/embed/3DjiSsKsGMI',
  Documentation: 'https://www.youtube.com/embed/BwJRzO4FJBw',
  'Запросы к любой API': 'https://www.youtube.com/embed/VlrYuRDKQBo',
  'Подсветка синтаксиса': 'https://www.youtube.com/embed/3DjiSsKsGMI',
  Документация: 'https://www.youtube.com/embed/BwJRzO4FJBw',
  Schema: 'https://www.youtube.com/embed/gr6ewWVOXOs',
  Схема: 'https://www.youtube.com/embed/gr6ewWVOXOs',
  'Query variables': 'https://www.youtube.com/embed/nYEmQhKfMS8',
  'Переменные запросов': 'https://www.youtube.com/embed/nYEmQhKfMS8',
};
