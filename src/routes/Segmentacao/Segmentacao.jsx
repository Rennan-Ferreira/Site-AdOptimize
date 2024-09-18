import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Rodape from '../../components/Rodape/Rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Segmentacao = () => {
  // Dados para o gráfico de distribuição de público por idade
  const ageDistributionData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        label: 'Distribuição por Idade',
        data: [15, 25, 30, 20, 5, 5],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
          '#4bc0c0',
          '#9966ff',
          '#ff9f40',
        ],
        hoverBackgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
          '#4bc0c0',
          '#9966ff',
          '#ff9f40',
        ],
      },
    ],
  };

  // Dados para o gráfico de segmentação de mercado
  const marketSegmentData = {
    labels: ['Tecnologia', 'Vestuário', 'Beleza', 'Alimentos', 'Outros'],
    datasets: [
      {
        label: 'Segmentação de Mercado',
        data: [35, 20, 15, 25, 5],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffce56', '#4bc0c0', '#9966ff'],
        hoverBackgroundColor: ['#36a2eb', '#ff6384', '#ffce56', '#4bc0c0', '#9966ff'],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Header title="Segmentação, Público-Alvo e Mercado" />
      <div className="container my-5">
        <h2 className="text-center mb-4">Análise de Segmentação</h2>

        {/* Gráficos de Segmentação */}
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <h4 className="text-center">Distribuição de Público por Idade</h4>
            <Pie data={ageDistributionData} />
          </div>
          <div className="col-md-6 mb-4">
            <h4 className="text-center">Segmentação de Mercado</h4>
            <Pie data={marketSegmentData} />
          </div>
        </div>

        {/* Tabela de Detalhes de Segmentação */}
        <h3 className="text-center">Detalhes de Segmentação</h3>
        <table className="table table-striped table-bordered mt-4">
          <thead className="thead-dark">
            <tr>
              <th>Segmento</th>
              <th>Impressões</th>
              <th>Cliques</th>
              <th>Taxa de Conversão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18-24 anos</td>
              <td>15.000</td>
              <td>1.500</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>25-34 anos</td>
              <td>25.000</td>
              <td>2.200</td>
              <td>8.8%</td>
            </tr>
            <tr>
              <td>35-44 anos</td>
              <td>30.000</td>
              <td>3.000</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Tecnologia</td>
              <td>35.000</td>
              <td>2.800</td>
              <td>8%</td>
            </tr>
            <tr>
              <td>Vestuário</td>
              <td>20.000</td>
              <td>1.700</td>
              <td>8.5%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Rodape/>
    </>
  );
};

export default Segmentacao;
