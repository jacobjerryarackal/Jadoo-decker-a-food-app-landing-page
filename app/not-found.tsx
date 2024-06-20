import React from 'react';
import styles from './404/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className={styles.button}>Go Home</a>
      </div>
      <div className={styles.animation}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Custom404;
