import styles from './RenderProps.module.scss';

import { BackgroundMain, CodePlayground, NavBar } from '../../../common';

const RenderProps = () => {
  const code: string = `export default function Profile() {
    return (
      <Avatar
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={100}
      />
    );
  }`;

  return (
    <div className={styles.page}>
      <BackgroundMain />
      <NavBar />
      <section className={styles.info__wrapper}>
        <h1>Render Props</h1>
        <div className={styles.info}>
          The term 'render props' refers to a technique for sharing code between
          React components using a prop whose value is a function. A component
          with a render prop takes a function that returns a React element and
          calls it instead of implementing its own render logic.
        </div>
        {CodePlayground(code)}
        <section className={styles.info__links}>
          <a href="https://react.dev/learn/passing-props-to-a-component">
            Render Props in React
          </a>
          <a href="https://www.robinwieruch.de/react-render-props/">
            Creating a Render Prop Component
          </a>
        </section>
      </section>
    </div>
  );
};

export default RenderProps;
