import styles from './HobbyCard.module.scss';

export const HobbyCard = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className={styles.hobbyCard}>
      <div className={styles.cardHeader}>{title}</div>
      <div className={styles.cardBody}>
        <img src={image} alt="game" />
      </div>
    </div>
  );
};
