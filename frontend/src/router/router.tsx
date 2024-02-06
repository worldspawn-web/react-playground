import { Route, Routes } from 'react-router-dom';
import { routenames } from './routenames';
import { FC, lazy } from 'react';
import { Home } from '../pages';

// Lazy Renders
const RenderPage = lazy(() => import('../pages/React/RenderProps/RenderProps'));

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<Home />} />
    <Route path={routenames.RENDER_PROPS} element={<RenderPage />} />
  </Routes>
);
