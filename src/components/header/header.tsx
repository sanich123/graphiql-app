import { useAuth } from '@/hooks/use-auth';
import Image from 'next/image';
import React from 'react';
import LogoutBtn from '../logout-btn/logout-btn';

export default function Header() {
  const { user } = useAuth();
  return (
    <>
      <div>{user?.email || user?.displayName}</div>
      {user?.photoURL && <Image src={user?.photoURL} alt="Avatar of the user" width={20} height={20} />}
      {user && <LogoutBtn />}
    </>
  );
}
