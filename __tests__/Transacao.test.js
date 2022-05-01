import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Transacao from '../src/components/Transacao';

describe('Component de Transacao do extrato', function () {
  it('Deve renderizar igual ao snapshot', function () {
    const {toJSON} = render(
      <Transacao data={'08/09/2022'} tipo={'saque'} valor={'20.00'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
