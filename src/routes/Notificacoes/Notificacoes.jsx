import React from "react";
import { Table, Button, Form } from "react-bootstrap";
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Rodape from '../../components/Rodape/Rodape';

const Notificacoes = () => {
  return (
    <div>
        <Navbar/>
      <Header />
      <div className="container my-5">
        <h1 className="text-center">Notificações e Alertas</h1>
        <p className="text-center">
          Veja suas notificações recentes e configure alertas importantes.
        </p>

        <div className="row">
          {/* Seção de Notificações */}
          <div className="col-md-6">
            <h3>Notificações Recentes</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ícone</th>
                  <th>Mensagem</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>🔔</td>
                  <td>Sua campanha "Verão 2024" está com alta performance!</td>
                  <td>17/09/2024</td>
                </tr>
                <tr>
                  <td>⚠️</td>
                  <td>Atenção: orçamento da campanha "Inverno 2024" está acabando.</td>
                  <td>16/09/2024</td>
                </tr>
                <tr>
                  <td>🔔</td>
                  <td>Você atingiu 80% do público-alvo na campanha "Black Friday".</td>
                  <td>15/09/2024</td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* Seção de Configurações de Alertas */}
          <div className="col-md-6">
            <h3>Configurar Alertas</h3>
            <Form>
              <Form.Group controlId="formEmailAlerta">
                <Form.Label>Email para alertas:</Form.Label>
                <Form.Control type="email" placeholder="Seu email" />
              </Form.Group>

              <Form.Group controlId="formTipoAlerta">
                <Form.Label>Tipo de Alerta:</Form.Label>
                <Form.Control as="select">
                  <option>Selecione um tipo de alerta</option>
                  <option>Orçamento</option>
                  <option>Performance da campanha</option>
                  <option>Público atingido</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Salvar Configurações
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Notificacoes;
