import React from 'react';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>👤 로그인</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '200px',
        }}
      >
        <input type="text" placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
