import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Rodape from '../../components/Rodape/Rodape';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

const PalavrasChave = () => {
  // Dados de exemplo para o gráfico de barras
  const data = {
    labels: ['Palavra 1', 'Palavra 2', 'Palavra 3', 'Palavra 4', 'Palavra 5'],
    datasets: [
      {
        label: 'Cliques',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [65, 59, 80, 81, 56],
      },
      {
        label: 'Conversões',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153, 102, 255, 0.8)',
        hoverBorderColor: 'rgba(153, 102, 255, 1)',
        data: [28, 48, 40, 19, 96],
      },
    ],
  };

  // Configurações para o gráfico
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="container my-5">
        <h1 className="text-center mb-4">Gestão de Palavras-Chave</h1>
        
        <div className="row mb-4">
          <div className="col-md-12">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Pesquisar palavras-chave" 
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Palavra-Chave</th>
                  <th scope="col">Cliques</th>
                  <th scope="col">Conversões</th>
                  <th scope="col">CTR (%)</th>
                  <th scope="col">CPC (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Palavra 1</td>
                  <td>65</td>
                  <td>28</td>
                  <td>4.5%</td>
                  <td>1.50</td>
                </tr>
                <tr>
                  <td>Palavra 2</td>
                  <td>59</td>
                  <td>48</td>
                  <td>3.2%</td>
                  <td>1.20</td>
                </tr>
                <tr>
                  <td>Palavra 3</td>
                  <td>80</td>
                  <td>40</td>
                  <td>5.0%</td>
                  <td>2.00</td>
                </tr>
                <tr>
                  <td>Palavra 4</td>
                  <td>81</td>
                  <td>19</td>
                  <td>6.1%</td>
                  <td>2.50</td>
                </tr>
                <tr>
                  <td>Palavra 5</td>
                  <td>56</td>
                  <td>96</td>
                  <td>7.3%</td>
                  <td>3.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">Desempenho de Palavras-Chave</h3>
            <Bar data={data} options={options} height={400} />
          </div>
        </div>
      </div>
      <Rodape/>
    </>
  );
};

export default PalavrasChave;
