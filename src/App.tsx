import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomeHeroV3 } from './pages/HomeHeroV3';
import { Carta } from './pages/Carta';
import { NuestraEsencia } from './pages/NuestraEsencia';
import { ElLocal } from './pages/ElLocal';
import { Visitanos } from './pages/Visitanos';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeHeroV3 />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/nuestra-esencia" element={<NuestraEsencia />} />
        <Route path="/el-local" element={<ElLocal />} />
        <Route path="/visitanos" element={<Visitanos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
