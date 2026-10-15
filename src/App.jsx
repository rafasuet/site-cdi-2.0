import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import RolagemAutomatica from "./components/RolagemAutomatica.jsx";
import Inicio from "./pages/Inicio.jsx";
import Eventos from "./pages/Eventos.jsx";
import Professores from "./pages/Professores.jsx";
import Guia from "./pages/Guia.jsx";
import Campus from "./pages/Campus.jsx";

export default function App() {
  return (
    <div className="min-h-full bg-bg text-fg">
      <RolagemAutomatica />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/professores" element={<Professores />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
