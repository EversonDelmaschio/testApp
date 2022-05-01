import {render} from '@testing-library/react-native';
import Conta from '../src/components/Conta';
import React from 'react';
describe('Component Conta do component prinicpal', () => {
  it('Deve renderizar o saldo', () => {
    const {getByText} = render(<Conta />);
    expect(getByText('Saldo:')).toBeTruthy();
  });
  it('Deve renderizar o botão de realizar transaçao', () => {
    const {getByText} = render(
      <Conta saldo={''} realizarTransacao={() => {}} />,
    );
    expect(getByText('Realizar transacao')).toBeTruthy();
  });
  it('Deve renderizar o input de valor', () => {
    const {getByTestId} = render(
      <Conta saldo={''} realizarTransacao={() => {}} />,
    );
    expect(getByTestId('valor')).toBeTruthy();
  });
});
