import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { BodyWrapper } from './styles';

export const App = () => {
  return (
    <div>
      <Header />

      <BodyWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BodyWrapper>
    </div>
  )
}
