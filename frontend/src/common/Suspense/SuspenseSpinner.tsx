import { BarLoader } from 'react-spinners';

import styles from './SuspenseSpinner.module.scss';
import { BackgroundMain } from '..';

export const SuspenseSpinner = () => (
  <div className={styles.loader__wrapper}>
    <BackgroundMain />
    <BarLoader loading={true} color="#ff5555" speedMultiplier={3} />
  </div>
);
