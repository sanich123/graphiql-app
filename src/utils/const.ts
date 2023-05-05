export const SOCIAL_NETWORKS = { github: 'Github', google: 'Google' } as const;

export const AUTH_NAV_BTNS_TEXT = [
  { phrase: 'Don&prime;t have an account?', isReset: false, isRegister: true, btnText: 'Register' },
  {
    phrase: 'Forgot the password?',
    isReset: true,
    isRegister: false,
    btnText: 'Reset',
  },
  {
    phrase: 'Have an account?',
    isReset: false,
    isRegister: false,
    btnText: 'Login',
  },
];
