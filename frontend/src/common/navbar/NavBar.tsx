import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <section className={styles.nav__header__wrapper}>
        <h2 className={styles.nav__header}>React Playground</h2>
        <span className={styles.nav__author}>by Worldspawn</span>
      </section>
      <section className={styles.nav__content__wrapper}>
        <a className={styles.nav__content__link} href="/react/render-props">
          Render Props
        </a>
        <a className={styles.nav__content__link} href="/react/refs">
          Refs
        </a>
        <a className={styles.nav__content__link} href="/react/events">
          Events
        </a>
        <a
          className={styles.nav__content__link}
          href="/react/high-order-components"
        >
          High Order Components
        </a>
      </section>
    </nav>
  );
};
