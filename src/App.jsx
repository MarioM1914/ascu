import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pocetna from "./pages/Pocetna";
import ONama from "./pages/ONama";
import Header from "./components/Header";
import Projekti from "./pages/Projekti";
import Partneri from "./pages/Partneri";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/nasi-projekti" element={<Projekti />} />
        <Route path="/partneri" element={<Partneri />} />
      </Routes>
    </>
  );
}
