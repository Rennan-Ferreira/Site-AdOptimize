import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar/Navbar';
import Cabecalho from '../../components/Header/Header';
import Rodape from '../../components/Rodape/Rodape';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const performanceData = {
    labels: ['01/09', '02/09', '03/09', '04/09', '05/09', '06/09', '07/09'],
    datasets: [
      {
        label: 'Impressões',
        data: [300, 400, 500, 450, 600, 700, 800],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Cliques',
        data: [120, 150, 200, 180, 220, 250, 300],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
      {
        label: 'Conversões',
        data: [50, 60, 80, 70, 90, 100, 120],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
    ],
  };

  const deviceData = {
    labels: ['Desktop', 'Mobile'],
    datasets: [
      {
        label: 'Distribuição de Dispositivos',
        data: [65, 35],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const keywordData = {
    labels: ['Palavra 1', 'Palavra 2', 'Palavra 3', 'Palavra 4', 'Palavra 5'],
    datasets: [
      {
        label: 'Cliques por Palavra-chave',
        data: [50, 80, 100, 40, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <Navbar/>
    <Cabecalho/>
    <div className="container-fluid">
      <h1 className="text-center">Visão Geral de Desempenho</h1>
      <p className="text-center">Aqui você pode acompanhar o desempenho geral de suas campanhas.</p>
      
      <div className="row justify-content-center">
        <div className="chart-container">
          <h4 className="text-center">Desempenho por Dia</h4>
          <Line data={performanceData} />
        </div>

        <div className="chart-container">
          <h4 className="text-center">Distribuição de Dispositivos</h4>
          <Doughnut data={deviceData} />
        </div>

        <div className="chart-container">
          <h4 className="text-center">Palavras-chave mais Performáticas</h4>
          <Bar data={keywordData} />
        </div>
        <div className="alert alert-info text-center" role="alert">
          Última atualização: 17 de Setembro de 2024
        </div>
      </div>
    </div>
    <Rodape/>
    </>
  );
}

export default Home;
