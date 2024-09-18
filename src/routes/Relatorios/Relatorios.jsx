import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Rodape from '../../components/Rodape/Rodape';
import { Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSVLink } from 'react-csv';

const Relatorios = () => {
  // Dados de exemplo para os gráficos
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');

  const dataBar = {
    labels: ['Campanha 1', 'Campanha 2', 'Campanha 3', 'Campanha 4', 'Campanha 5'],
    datasets: [
      {
        label: 'Desempenho por Campanha',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [500, 700, 600, 800, 750],
      },
    ],
  };

  const dataPie = {
    labels: ['Campanha 1', 'Campanha 2', 'Campanha 3', 'Campanha 4', 'Campanha 5'],
    datasets: [
      {
        label: 'Distribuição de Cliques',
        data: [300, 400, 350, 500, 450],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Dados para exportar
  const csvData = [
    ['Campanha', 'Cliques', 'Conversões', 'Gasto'],
    ['Campanha 1', 300, 150, '$500'],
    ['Campanha 2', 400, 200, '$600'],
    ['Campanha 3', 350, 180, '$550'],
    ['Campanha 4', 500, 250, '$700'],
    ['Campanha 5', 450, 220, '$650'],
  ];

  return (
    <>
      <Navbar />
      <Header/>
      <div className="container my-5">
        <h1 className="text-center mb-4">Relatórios de Desempenho</h1>

        <div className="row mb-4">
          <div className="col-md-12">
            <h3>Filtros de Relatório</h3>
            <form className="mb-4">
              <div className="form-group">
                <label htmlFor="startDate">Data de Início</label>
                <input
                  type="date"
                  id="startDate"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">Data de Término</label>
                <input
                  type="date"
                  id="endDate"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Gerar Relatório</button>
            </form>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <h3 className="text-center">Desempenho por Campanha</h3>
            <Bar data={dataBar} height={300} />
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Distribuição de Cliques</h3>
            <Pie data={dataPie} height={300} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">Tabela de Dados</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Campanha</th>
                  <th scope="col">Cliques</th>
                  <th scope="col">Conversões</th>
                  <th scope="col">Gasto</th>
                </tr>
              </thead>
              <tbody>
                {csvData.slice(1).map((row, index) => (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center">
              <CSVLink data={csvData} filename={"relatorio.csv"} className="btn btn-success">
                Exportar como CSV
              </CSVLink>
            </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </>
  );
};

export default Relatorios;
