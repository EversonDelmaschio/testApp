import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Transacoes from '../src/components/Transacoes';

describe('Component de Transações do component principal', function () {
  it('Deve renderizar uma lista de transaçoes', function () {
    const transacoes = [
      {
        data: '08/09/2022',
        valor: '20.00',
        transacao: 'saque',
      },
    ];
    const root = render(<Transacoes transacoes={transacoes} />);
    expect(root.getByText('saque')).toBeTruthy();
  });

  it('Deve renderizar igual ao snapshot', function () {
    const transacoes = [
      {
        data: '08/09/2022',
        tipo: 'saque',
        valor: '20.00',
      },
    ];
    const {toJSON} = render(<Transacoes transacoes={transacoes} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
