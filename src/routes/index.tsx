import { MainLayout } from '@/layouts/mainLayout/intex';
import PageNotFound from '@/PageNotFound';
import { Home } from '@/pages/home';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<p>About</p>} />
      </Route>

      <Route path="/*" element={<PageNotFound />} />
    </ReactRoutes>
  );
};
