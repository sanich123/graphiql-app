import { sendPasswordReset } from '@/firebase/email-auth';

type ResetPasswordBtnProps = {
  className: string;
  email: string;
};

export default function ResetPasswordBtn({ className, email }: ResetPasswordBtnProps) {
  return (
    <button className={className} onClick={() => sendPasswordReset(email)}>
      Send password reset email
    </button>
  );
}
