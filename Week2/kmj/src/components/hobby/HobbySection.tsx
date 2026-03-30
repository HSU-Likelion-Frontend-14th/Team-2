import LoL from '../../assets/LoL.png';
import Netflix from '../../assets/Netflix.png';
import Exercise from '../../assets/Exercise.png';
import styles from './HobbySection.module.scss';
import { HobbyCard } from './HobbyCard';

const HobbyList = [
  {
    title: '게임하기',
    image: LoL,
  },
  {
    title: '넷플릭스 보기',
    image: Netflix,
  },
  {
    title: '운동하기',
    image: Exercise,
  },
];

export const HobbySection = () => {
  return (
    <section id="hobby" className={styles.hobbyContainer}>
      <h1 className={styles.title}>HOBBY</h1>
      <div className={styles.hobbyContents}>
        {HobbyList.map((hobby, index) => (
          <HobbyCard key={index} title={hobby.title} image={hobby.image} />
        ))}
      </div>
    </section>
  );
};
