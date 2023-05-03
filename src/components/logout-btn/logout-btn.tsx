import { logOut } from '@/firebase/email-auth';

export default function LogoutBtn() {
  return (
    <button type="button" onClick={() => logOut()}>
      LogOut
    </button>
  );
}
