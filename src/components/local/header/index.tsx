import { CatLogo } from '@/assets/svgComponents/catLogo';
import { Avatar, Typography } from 'antd';
import { CiLogout, CiUser } from 'react-icons/ci';
import { BsStars } from 'react-icons/bs';
import { cn } from '@/lib/utils';
import { GiHealthNormal } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ListItemProps = React.HTMLAttributes<HTMLLIElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

export const Header = () => {
  return (
    <div id="header" className="flex justify-between bg-base-gray-600 py-2">
      <LogoArea />

      <NavBar />

      <UserArea />
    </div>
  );
};

const LogoArea = ({ ...props }: { props?: DivProps }) => {
  return (
    <span
      id="logo-area"
      className="flex w-32 flex-col items-center justify-center"
      {...props}
    >
      <Link to="/" className="flex w-32 flex-col items-center justify-center">
        <CatLogo className="h-7 w-7" fill="hsl(0,0%,94.9%)" />
        <Typography id="logo-text" className="text-[0.7rem] text-base-gray-100">
          Pet Healthcare
        </Typography>
      </Link>
    </span>
  );
};

const NavBar = ({
  className = '',
  ...props
}: {
  className?: string;
  props?: DivProps;
}) => {
  return (
    <nav id="nav" className="flex items-center" {...props}>
      <ul className="flex cursor-pointer items-center gap-6 text-product-blue">
        <NavItem id="home" to="#">
          Início
        </NavItem>

        <NavItem
          id="self-service"
          to="#self-service"
          icon={<GiHealthNormal size={10} />}
        >
          Autoatendimento
        </NavItem>

        <NavItem
          id="little-stars"
          to="#little-stars"
          icon={<BsStars size={14} />}
        >
          Estrelinhas
        </NavItem>

        <NavItem id="about" to="#about">
          Sobre nós
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({
  children = '',
  className,
  id,
  icon,
  to = '/',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
  icon?: React.ReactNode;
  to: string;
  props?: ListItemProps;
}) => {
  const { hash } = useLocation();

  return (
    <li
      id={id}
      className={cn(
        'flex items-center gap-1 text-sm font-semibold transition-colors hover:text-product-purple-dark',
        hash === to && 'text-product-purple-dark',
        to === '#' && hash === '' && 'text-product-purple-dark',
        className,
      )}
      {...props}
    >
      <a href={to} className="flex items-center gap-1">
        {icon}
        {children}
        {icon}
      </a>
    </li>
  );
};

const UserArea = ({ ...props }: { props?: SpanProps }) => {
  return (
    <span className="flex w-32 items-center justify-end gap-1 px-2" {...props}>
      <Avatar
        className="cursor-pointer transition-colors hover:bg-base-gray-500"
        size="small"
        icon={<CiUser />}
      />

      <Button className="flex h-6 gap-2 px-3 py-0 text-xs text-base-gray-300 transition-colors hover:bg-base-gray-500 hover:text-base-gray-100">
        <CiLogout size={14} />
      </Button>
    </span>
  );
};
