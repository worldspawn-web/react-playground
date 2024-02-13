import { Route, Routes } from 'react-router-dom';
import { FC, lazy } from 'react';

import { routenames } from './routenames';
import { Home } from '../pages';

// Lazy Renders
const RenderPage = lazy(() => import('../pages/React/RenderProps'));
const RefsPage = lazy(() => import('../pages/React/Refs'));
const EventsPage = lazy(() => import('../pages/React/Events'));
const HighOrderPage = lazy(() => import('../pages/React/HighOrder'));

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<Home />} />
    <Route path={routenames.RENDER_PROPS} element={<RenderPage />} />
    <Route path={routenames.REFS} element={<RefsPage />} />
    <Route path={routenames.EVENTS} element={<EventsPage />} />
    <Route path={routenames.HIGH_ORDER} element={<HighOrderPage />} />
  </Routes>
);
