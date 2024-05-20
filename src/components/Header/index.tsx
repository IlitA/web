import { HeaderComponent } from './styles';
import { Logo } from '../../assets/logo';
import { Link } from '../Link';

export const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link target="_blank" to="https://drive.google.com/file/d/1lENZ0kaRCuqfn0K2Iwy1Zrk5rMNElsAD">CV</Link></li>
        </ul>
      </nav>
    </HeaderComponent>
  );
};
