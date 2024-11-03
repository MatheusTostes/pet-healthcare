import PageNotFound from '@/PageNotFound';
import { Button } from '@/components/ui/button';
import { Home } from '@/pages/home';
import { MainLayout } from './layouts/mainLayout/intex';
import { Routes } from './routes';

export default function App() {
  return (
    <div className="relative h-full overflow-auto">
      <Routes />
    </div>
  );
}
