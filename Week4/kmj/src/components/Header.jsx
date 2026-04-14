import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        홈
      </NavLink>
      <NavLink
        to="/board"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        게시판
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        회원가입
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        로그인
      </NavLink>
    </header>
  );
};
