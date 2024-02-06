import { NavBar } from '../../common';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <section className={styles.page__greeting}>
        <img
          className={styles.page__greeting__img}
          src="../src/assets/react.svg"
        />
        <h1 className={styles.page__greeting__header}>Greetings!</h1>
        <p className={styles.page__greeting__text}>
          That's a personal page where I'm learning many aspects of React.js.
          Usually, all the stuff that is represented here is what I feel not
          confident about, struggling with applying already existing skills.
          Hope this project helps me get better at it :)
        </p>
      </section>
    </div>
  );
};
