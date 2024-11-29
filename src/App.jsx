import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import MiSmo from "./pages/MiSmo";
import Header from "./components/Header";
import Projekti from "./pages/Projekti";
import Partneri from "./pages/Partneri";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/mi-smo" element={<MiSmo />} />
        <Route path="/nasi-projekti" element={<Projekti />} />
        <Route path="/partneri" element={<Partneri />} />
      </Routes>
    </>
  );
}
