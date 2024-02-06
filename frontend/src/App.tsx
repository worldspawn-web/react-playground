import './App.module.scss';
import { Suspense } from 'react';
import { Router } from './router';
export default function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <Router />
    </Suspense>
  );
}
