import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './SignUpPage.module.scss';

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleSignup = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    console.log('회원가입 정보:', data);
    alert('가입이 완료되었습니다!');
    navigate('/login');
  };

  return (
    <div className={styles.signupContainer}>
      <h2>👤 회원가입</h2>
      <form onSubmit={handleSubmit(handleSignup)}>
        <input
          {...register('username', {
            required: '이름을 입력하세요.',
            minLength: {
              value: 2,
              message: '이름은 최소 2자 이상이어야 합니다.',
            },
          })}
          type="text"
          placeholder="아이디"
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
        <input
          {...register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^\S+@\S+$/,
              message: '유효한 이메일을 입력하세요.',
            },
          })}
          type="email"
          placeholder="이메일"
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <input
          {...register('password', {
            required: '비밀번호를 입력하세요.',
            minLength: {
              value: 6,
              message: '비밀번호는 최소 6자 이상이어야 합니다.',
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
        <input
          {...register('passwordConfirm', {
            required: '비밀번호 확인을 입력해주세요',
            validate: (value) =>
              value === getValues('password') || '비밀번호가 일치하지 않습니다',
          })}
          type="password"
          placeholder="비밀번호 확인"
        />
        {errors.passwordConfirm && (
          <p className={styles.error}>{errors.passwordConfirm.message}</p>
        )}
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};
