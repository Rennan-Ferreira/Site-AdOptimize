import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Sobre o AdOptimize</h5>
            <p>
              O AdOptimize é uma plataforma inteligente que otimiza suas campanhas publicitárias usando IA e análise avançada de dados.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/campanhas" className="text-light">Campanhas</a></li>
              <li><a href="/segmentacao" className="text-light">Segmentação</a></li>
              <li><a href="/relatorios" className="text-light">Relatórios</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Contato</h5>
            <ul className="list-unstyled">
              <li>Email: suporte@adoptimize.com</li>
              <li>Telefone: +55 (11) 1234-5678</li>
              <li>Endereço: São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">&copy; 2024 AdOptimize. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
