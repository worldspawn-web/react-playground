import { Route, Routes } from 'react-router-dom';
import { routenames } from './routenames';
import { FC } from 'react';
import { Home } from '../pages';

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<Home />} />
  </Routes>
);
