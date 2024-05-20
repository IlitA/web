import { HeaderComponent } from './styles';
import { Logo } from '../../assets/logo';
// import { Link } from '../Link';

export const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
      {/* TODO: uncomment when have more pages */}
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav> */}
    </HeaderComponent>
  );
};
