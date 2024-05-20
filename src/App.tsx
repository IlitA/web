import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AppWrapper, BodyWrapper } from './styles';

export const App = () => {
  return (
    <AppWrapper>
      <Header />

      <BodyWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BodyWrapper>
    </AppWrapper>
  )
}
