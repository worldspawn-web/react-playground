import { LiveProvider, LiveEditor, LiveError } from 'react-live';
import styles from './CodePlayground.module.scss';

export const CodePlayground = (
  code: string,
  options?: { preview: boolean; debug: boolean }
) => {
  const RenderPreview = () => {
    if (options?.preview) return <LiveEditor />;
  };
  const RenderErrors = () => {
    if (options?.debug) return <LiveError />;
  };

  return (
    <section className={styles.code__playground}>
      <LiveProvider code={code}>
        <LiveEditor />
        <RenderPreview />
        <RenderErrors />
      </LiveProvider>
    </section>
  );
};
