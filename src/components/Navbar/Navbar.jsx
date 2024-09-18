import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">AdOptimize</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Visão Geral</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/campanhas">Campanhas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/segmentacao">Segmentação</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/palavras-chave">Palavras-Chave</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/previsao">Previsão de Desempenho</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/relatorios">Relatórios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notificacoes">Notificações</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
