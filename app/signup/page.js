import React from 'react';
import styles from './signup.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>Sign Up</h2>
        <form>
          <div className={styles.inputBox}>
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className={styles.inputBox}>
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className={styles.signupButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
