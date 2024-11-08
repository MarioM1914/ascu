import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import MiSmo from './pages/MiSmo';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Pocetna />} />
      <Route path='/mi-smo' element={<MiSmo />} />
    </Routes>
    </BrowserRouter>
  )
}
