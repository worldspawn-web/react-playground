import {
  BackgroundMain,
  CodePlayground,
  NavBar,
  RedHighlight,
} from '../../../common';
import styles from './Refs.module.scss';

const Refs = () => {
  const code = `let countRef = useRef(0);
    function handleClick() {
      countRef.current = countRef.current + 1;
}`;

  return (
    <div className={styles.page}>
      <BackgroundMain />
      <NavBar />
      <section className={styles.info__wrapper}>
        <h1>Refs</h1>
        <div className={styles.info}>
          <RedHighlight>Refs</RedHighlight> provide a way to access DOM nodes or
          React elements created in the render method. In the typical React
          dataflow,{' '}
          <RedHighlight>
            props are the only way that parent components interact with their
            children
          </RedHighlight>
          . To modify a child, you re-render it with new props. However, there
          are a few cases where you need to imperatively modify a child outside
          of the typical dataflow. The child to be modified could be an instance
          of a React component, or it could be a DOM element. For both of these
          cases, React provides an escape hatch.
        </div>
        <div className={styles.info}>
          When a piece of information is used for rendering, keep it in state.
          When a piece of information is only needed by event handlers and
          changing it doesn't require a re-render, using a ref may be more
          efficient.
        </div>
        {CodePlayground(code)}
        <div className={styles.info}>
          Typically, you will use a ref when your component needs to “step
          outside” React and communicate with external APIs—often a browser API
          that won't impact the appearance of the component. Here are a few of
          these rare situations:
          <li>
            Storing timeout IDs Storing and manipulating DOM elements, which we
            cover on the next page
          </li>
          <li>
            Storing other objects that aren't necessary to calculate the JSX.
          </li>
          <li>
            If your component needs to store some value, but it doesn't impact
            the rendering logic, choose refs.
          </li>
        </div>
      </section>
    </div>
  );
};

export default Refs;
