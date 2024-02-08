import { FC } from 'react';
import styles from './Highlight.module.scss';

interface Props {
  children: React.ReactNode;
}

export const GreyHighlight: FC<Props> = ({ children }) => {
  return <span className={styles.highlight__grey}>{children}</span>;
};
