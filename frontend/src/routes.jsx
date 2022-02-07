import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import EstagioInfo from './views/EstagioInfo';
import Login from './views/Login';
import SolicitacaoEstagio from './views/SolicitacaoEstagio';

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/solicitacao-estagio" element={<SolicitacaoEstagio />} />
        <Route path="/estagio-info" element={<EstagioInfo />} />
      </Routes>
    </Router>
  );
}
