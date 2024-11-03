import { Header } from '@/components/local/header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
