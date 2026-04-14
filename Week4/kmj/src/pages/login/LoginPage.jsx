import React from 'react';
import styles from './LoginPage.module.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleLogin = (data) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      data.username === storedUser.username &&
      data.password === storedUser.password
    ) {
      console.log('로그인 정보:', data);
      alert('로그인 성공!');
      navigate('/');
    } else {
      setError('root', {
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>👤 로그인</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          {...register('username', {
            required: '아이디를 입력하세요.',
            minLength: {
              value: 2,
              message: '아이디는 최소 2자 이상이어야 합니다.',
            },
          })}
          type="text"
          placeholder="아이디"
        />
        {!errors.root && errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
        <input
          {...register('password', {
            required: '비밀번호를 입력하세요.',
          })}
          type="password"
          placeholder="비밀번호"
        />
        {!errors.root && errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
        {errors.root && <p className={styles.error}>{errors.root.message}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
