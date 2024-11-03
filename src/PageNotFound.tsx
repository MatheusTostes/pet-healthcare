import { Link } from 'react-router-dom';
import { ConfusedCat } from './assets/svgComponents/confusedCat';
import { Button } from './components/ui/button';

export default function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col gap-6">
      <div className="my-auto">
        <span className="flex items-center justify-center text-[9rem]">
          <p>4</p>
          <ConfusedCat className="h-32 w-32" fill="hsl(0,0%,94.9%)" />
          <p>4</p>
        </span>

        <p className="mx-auto mb-20 flex w-full max-w-6xl flex-col place-items-center gap-6 rounded-3xl">
          <p>A página que você está procurando não existe.</p>
          <Button className="pointer-cursor border-none bg-base-gray-600 font-semibold text-base-gray-300 transition-colors hover:bg-base-gray-400 hover:text-base-gray-200">
            <Link to="/">Voltar para a página inicial</Link>
          </Button>
        </p>
      </div>
    </div>
  );
}
