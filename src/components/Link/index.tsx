import { LinkComponent } from './styles';

interface LinkProps {
  to: string;
  target?: string;
  children: React.ReactNode;
}

export const Link = ({ to, target = '_self', children }: LinkProps) => {
  return (
    <LinkComponent to={to} target={target}>
      {children}
    </LinkComponent>
  );
};
