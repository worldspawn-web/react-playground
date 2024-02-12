import { BounceLoader } from 'react-spinners';

import styles from './SuspenseSpinner.module.scss';
import { BackgroundMain } from '..';

export const SuspenseSpinner = () => (
  <div className={styles.loader__wrapper}>
    <BackgroundMain />
    <BounceLoader loading={true} size={150} color="#ff5555" />
  </div>
);
