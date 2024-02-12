import { BackgroundMain, CodePlayground, NavBar } from '..';

import styles from './renderPage.module.scss';

export const renderPage = (data) => {
  const { header, info, links, linkHeader, code } = data;

  const renderPageInfo = (info: string[]) => {
    return info.map((i) => <div className={styles.info}>{i}</div>);
  };

  const renderPageLinks = (links: string[], linkHeader: string[]) => {
    return links.map((link, index) => (
      <a key={index} href={link}>
        {linkHeader[index]}
      </a>
    ));
  };

  return (
    <div className={styles.page}>
      <BackgroundMain />
      <NavBar />
      <section className={styles.info__wrapper}>
        <section className={styles.info__wrapper}>
          <h1>{header}</h1>
          {renderPageInfo(info)}
          {CodePlayground(code)}
          <section className={styles.info__links}>
            {renderPageLinks(links, linkHeader)}
          </section>
        </section>
      </section>
    </div>
  );
};
