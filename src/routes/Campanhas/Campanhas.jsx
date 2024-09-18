import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Rodape from '../../components/Rodape/Rodape';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simulando campanhas para exibição
const campaigns = [
  {
    id: 1,
    name: 'Campanha de Verão 2024',
    status: 'Ativa',
    budget: 'R$ 5.000,00',
    clicks: 1200,
    impressions: 50000,
  },
  {
    id: 2,
    name: 'Lançamento Produto X',
    status: 'Pausada',
    budget: 'R$ 3.500,00',
    clicks: 900,
    impressions: 40000,
  },
  {
    id: 3,
    name: 'Promoção Black Friday',
    status: 'Finalizada',
    budget: 'R$ 10.000,00',
    clicks: 3500,
    impressions: 150000,
  },
  {
    id: 4,
    name: 'Férias de Julho',
    status: 'Ativa',
    budget: 'R$ 8.000,00',
    clicks: 2500,
    impressions: 100000,
  },
];

function Campanhas() {
  return (
    <>
      <Navbar />
      <Header title="Campanhas" />
      <div className="container my-5">
        <h2 className="text-center mb-4">Campanhas Atuais</h2>
        <div className="row">
          {campaigns.map((campaign) => (
            <div className="col-lg-4 col-md-6 mb-4" key={campaign.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{campaign.name}</h5>
                  <p className="card-text">
                    <strong>Status:</strong> {campaign.status}
                  </p>
                  <p className="card-text">
                    <strong>Orçamento:</strong> {campaign.budget}
                  </p>
                  <p className="card-text">
                    <strong>Cliques:</strong> {campaign.clicks}
                  </p>
                  <p className="card-text">
                    <strong>Impressões:</strong> {campaign.impressions}
                  </p>
                  <button className="btn btn-primary">Ver Detalhes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Rodape/>
    </>
  );
}

export default Campanhas;
