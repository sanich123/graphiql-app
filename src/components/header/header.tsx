import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import Image from 'next/image';
import Loader from '../loader/loader';
import LogoutBtn from '../logout-btn/logout-btn';

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <div>{user?.email || user?.displayName}</div>
      {loading && <Loader />}
      {error && <p>error.message</p>}
      {user?.photoURL && <Image src={user?.photoURL} alt="Avatar of the user" width={30} height={30} />}
      {user && <LogoutBtn />}
    </>
  );
}
