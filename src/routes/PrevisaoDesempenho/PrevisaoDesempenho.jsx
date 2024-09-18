import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Rodape from '../../components/Rodape/Rodape';
import { Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrevisaoDesempenho = () => {
  // Dados de exemplo para o gráfico de linha
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Previsão de Cliques',
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        data: [50, 70, 60, 90, 100, 80, 95],
      },
      {
        label: 'Previsão de Conversões',
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        data: [20, 30, 25, 40, 45, 35, 50],
      },
    ],
  };

  // Configurações para o gráfico
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mês',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantidade',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="container my-5">
        <h1 className="text-center mb-4">Previsão de Desempenho</h1>

        <div className="row mb-4">
          <div className="col-md-12">
            <h3 className="text-center">Gráfico de Previsão de Desempenho</h3>
            <Line data={data} options={options} height={400} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">Previsões Mensais</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Mês</th>
                  <th scope="col">Cliques Esperados</th>
                  <th scope="col">Conversões Esperadas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Janeiro</td>
                  <td>50</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Fevereiro</td>
                  <td>70</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Março</td>
                  <td>60</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Abril</td>
                  <td>90</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Maio</td>
                  <td>100</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>Junho</td>
                  <td>80</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Julho</td>
                  <td>95</td>
                  <td>50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Rodape/>
    </>
  );
};

export default PrevisaoDesempenho;
