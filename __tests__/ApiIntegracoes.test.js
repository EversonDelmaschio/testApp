import 'isomorphic-fetch';
import React from 'react';
import App from '../App';
import api from '../src/api';
import {render, waitFor} from '@testing-library/react-native';
jest.mock('../src/api');
describe('Requisições para API', () => {
  it('Exibir saldo através da API', async () => {
    api.buscaSaldo.mockResolvedValue(1000);
    const root = render(<App />);
    await waitFor(() =>
      expect(root.getByTestId('saldo').children[0]).toBe('1000'),
    );
  });

  it('Exibir lista de transações através da API', async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        valor: '10',
        transacao: 'saque',
        data: '10/08/2020',
        id: 1,
      },
      {
        transacao: 'deposito',
        valor: '20',
        data: '26/09/2020',
        id: 2,
      },
    ]);
    const root = render(<App />);
    await waitFor(() =>
      expect(root.getByTestId('transacoes').children.length).toBe(2),
    );
  });
});
