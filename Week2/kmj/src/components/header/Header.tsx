import Logo from '../../assets/Logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <nav>
        <ul className={styles.navContainer}>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#hobby">HOBBY</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
