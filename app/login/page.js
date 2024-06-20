'use client'

import React, { useState } from 'react';
import styles from './login.module.css';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {
  const { data: session } = useSession();

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFeedback, setLoginFeedback] = useState('');

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const response = await fetch('/users.json');
    const data = await response.json();
    setUsers(data);

    const user = data.find(
      (user) => user.email === username && user.password === password
    );

    if (user) {
      setLoginFeedback('Login successful!');
    } else {
      setLoginFeedback('Invalid username or password.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <form>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div>
            <button onClick={handleButtonClick} type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
          <br />
          <div>
            {!session ? (
              <Link href='https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=660222975112-76gq2t4rcu637kh5m8rog4nhq0cmdh65.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=AqlJJgbiK-dyugTsMag_plSn2MogcOWoijWtkMxPszQ&code_challenge=qS5cFVhK8dkSMkSJmd31z_Ke6Z3w17M6JWq5OhKz60o&code_challenge_method=S256&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow'>
              <button type="button" className={styles.googlebutton}>
                Sign in with Google
              </button>
            </Link>
            ): (
              <Link href='https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=660222975112-76gq2t4rcu637kh5m8rog4nhq0cmdh65.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=AqlJJgbiK-dyugTsMag_plSn2MogcOWoijWtkMxPszQ&code_challenge=qS5cFVhK8dkSMkSJmd31z_Ke6Z3w17M6JWq5OhKz60o&code_challenge_method=S256&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow'>
              <button type="button" className={styles.googlebutton}>
                Sign out with Google
              </button>
            </Link>
            )}
            
          </div>
        </form>
        {loginFeedback && <div className={styles.feedback}>{loginFeedback}</div>}
      </div>
    </div>
  );
};

export default Login;
