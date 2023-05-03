import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './login.module.scss';
// import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGoogle } from '@/firebase/google-auth';
import Link from 'next/link';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const { login, loginContainer, loginTextBox, loginBtn, loginGoogle } = styles;
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   if (user) navigate('/dashboard');
  // }, [user, loading]);

  return (
    <div className={login}>
      <div className={loginContainer}>
        <input type="text" className={loginTextBox} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
        <input type="password" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className={loginBtn} onClick={() => signInWithEmailAndPassword(auth, email, password)}>
          Login
        </button>
        <button className={`${loginBtn}${loginGoogle}`} onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link href="/reset">Forgot Password</Link>
        </div>
        <div>
          {'Dont have an account?'} <Link href="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
