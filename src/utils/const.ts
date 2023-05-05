export const SOCIAL_NETWORKS = {
  github: 'Github',
  google: 'Google',
} as const;

export const AUTH_NAV_BTNS_TEXT = [
  // eslint-disable-next-line quotes
  { phrase: `Don't have an account?`, btnText: 'Register' },
  {
    phrase: 'Forgot the password?',
    btnText: 'Reset',
  },
  {
    phrase: 'Have an account?',
    btnText: 'Login',
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
    value: '',
    stateFn: {},
  },
  {
    type: 'email',
    placeholder: 'E-mail address',
    name: 'email',
    pattern: '^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
    title: 'Ваш email должен соответствовать паттерну ^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})',
    autoComplete: 'email',
    value: '',
    stateFn: {},
  },
  {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    pattern: '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
    title: 'Пароль должен соответствовать паттерну (?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
    autoComplete: 'current-password',
    value: '',
    stateFn: {},
  },
];

export const AUTH_PLACES = {
  login: 'Login',
  register: 'Register',
  reset: 'Reset',
} as const;
