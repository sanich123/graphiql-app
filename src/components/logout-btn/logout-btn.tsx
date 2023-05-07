import { logOut } from '@/firebase/email-auth';
import { useAppSelector } from '@/redux/hooks/hooks';

export default function LogoutBtn() {
  const { language } = useAppSelector(({ changeLang }) => changeLang);
  return (
    <button type="button" onClick={() => logOut(language)}>
      LogOut
    </button>
  );
}
