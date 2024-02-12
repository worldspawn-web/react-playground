import { Suspense } from 'react';

import { Router } from './router';
import { SuspenseSpinner } from './common';
import './App.module.scss';

export default function App() {
  return (
    <Suspense fallback={<SuspenseSpinner />}>
      <Router />;
    </Suspense>
  );
}
