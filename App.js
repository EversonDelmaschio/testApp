/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import api from './src/api';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Conta from './src/components/Conta';
import Transacoes from './src/components/Transacoes';

export const calcularNovoSaldo = (valores, saldo) => {
  if (valores.transacao === 'deposito') {
    return saldo + parseInt(valores.valor);
  } else {
    return saldo - parseInt(valores.valor);
  }
};

const App = () => {
  const [saldo, atualizarSaldo] = useState(1000);
  const [transacoes, atualizarTransacoes] = useState([]);

  async function carregarTransacoes() {
    let transacoes = await api.listaTransacoes();
    transacoes = transacoes.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return (
        new Date(b.data.split('/').reverse().join('-')) -
        new Date(a.data.split('/').reverse().join('-'))
      );
    });
    atualizarTransacoes(transacoes);
  }

  async function obterSaldo() {
    const saldo = await api.buscaSaldo();
    atualizarSaldo(saldo);
  }

  function realizarTransacao(valores) {
    const novoSaldo = calcularNovoSaldo(valores, saldo);

    api.atualizaSaldo(novoSaldo).catch(error => console.error(error));
    api.atualizaTransacoes(valores).catch(error => console.error(error));

    atualizarSaldo(novoSaldo);
    atualizarTransacoes([valores]);
  }

  useEffect(() => {
    obterSaldo();
    carregarTransacoes();
  }, [saldo]);

  return (
    <SafeAreaView style={styles.container} accessibilityLabel="testview">
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>Controle de pontos</Text>
      </View>
      <Conta saldo={saldo} realizarTransacao={realizarTransacao} />
      <Transacoes transacoes={transacoes} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textHeader: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
  },
  headerContainer: {
    height: '10%',
    backgroundColor: '#006FB9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
