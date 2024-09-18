// src/components/Predictor.jsx
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Predictor = () => {
  const [diaFuturo, setDiaFuturo] = useState('Terça-feira');
  const [horarioFuturo, setHorarioFuturo] = useState('14:00');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = () => {
    axios.post('http://localhost:5000/api/predict', {
      dia_futuro: diaFuturo,
      horario_futuro: horarioFuturo,
    })
    .then(response => {
      setResultado(response.data);
      setError(null);
    })
    .catch(error => {
      setError(error.response ? error.response.data.error : error.message);
      setResultado(null);
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Previsão de Impressões</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Dia Futuro</label>
            <input
              type="text"
              className="form-control"
              value={diaFuturo}
              onChange={(e) => setDiaFuturo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Horário Futuro</label>
            <input
              type="text"
              className="form-control"
              value={horarioFuturo}
              onChange={(e) => setHorarioFuturo(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handlePredict}>Prever</button>
        </div>
      </div>
      {resultado && (
        <div className="mt-4">
          <div className="alert alert-success">
            <h4 className="alert-heading">Resultado:</h4>
            <p><strong>Dia:</strong> {resultado.dia}</p>
            <p><strong>Hora:</strong> {resultado.hora}</p>
            <p><strong>Impressão:</strong> {resultado.impressao}</p>
          </div>
        </div>
      )}
      {error && (
        <div className="mt-4">
          <div className="alert alert-danger">
            <h4 className="alert-heading">Erro:</h4>
            <p>{error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predictor;
