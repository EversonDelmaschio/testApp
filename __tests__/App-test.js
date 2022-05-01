import 'isomorphic-fetch';
import React from 'react';
import App, {calcularNovoSaldo} from '../App';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
describe('Component Principal', () => {
  describe('Quando realizo um tipo de transação', () => {
    it('saque, o valor deve ser subtraido', function () {
      const transacao = {transacao: 'saque', valor: 50};
      const novoSaldo = calcularNovoSaldo(transacao, 150);
      expect(novoSaldo).toBe(100);
    });

    it('depóstio, o valor deve ser adicionado', function () {
      const transacao = {transacao: 'deposito', valor: 50};
      const novoSaldo = calcularNovoSaldo(transacao, 150);
      expect(novoSaldo).toBe(200);
    });
  });

  describe('Quando realizo uma transação através do app', () => {
    it('deve subtrair o saldo quando uma Saque for realizado.', async function () {
      let root = render(<App />);
      const saldo = root.getByTestId('saldo');
      const transacao = root.getByText('Saque');
      const valor = root.getByTestId('valor');
      const botaoTransacao = root.getByTestId('button-transaction');

      await waitFor(() => expect(saldo.children[0]).toBe('1000'));

      fireEvent.press(transacao);
      fireEvent.changeText(valor, '10');
      fireEvent.press(botaoTransacao);

      expect(saldo.children[0]).toBe('990');
    });

    it('deve aumentar o saldo quando uma Deposito for realizado.', async function () {
      let root = render(<App />);
      const saldo = root.getByTestId('saldo');
      const transacao = root.getByText('Depósito');
      const valor = root.getByTestId('valor');
      const botaoTransacao = root.getByTestId('button-transaction');

      await waitFor(() => expect(saldo.children[0]).toBe('990'));

      fireEvent.press(transacao);
      fireEvent.changeText(valor, '10');
      fireEvent.press(botaoTransacao);

      expect(saldo.children[0]).toBe('1000');
    });
  });
});
