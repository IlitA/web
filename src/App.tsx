import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AppWrapper } from './commonStyles';

export const App = () => {
  return (
    <AppWrapper>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppWrapper>
  )
}
