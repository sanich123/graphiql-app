export function textChanger(isRegisterOpen: boolean, isResetOpen: boolean) {
  if (isRegisterOpen) {
    return 'Register';
  } else if (isResetOpen) {
    return 'Send password reset email';
  } else {
    return 'Login';
  }
}
