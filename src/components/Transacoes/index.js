import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Transacao from '../Transacao';
import PropTypes from 'prop-types';

const Transacoes = ({transacoes}) => {
  const renderItem = ({item}) => {
    const {id, transacao, valor, data} = item;
    return (
      <Transacao
        key={`${id}-${transacao}`}
        tipo={transacao}
        valor={valor}
        data={data}
      />
    );
  };
  return (
    <View testID="transacoes" style={styles.container}>
      <Text style={styles.label}>Historico transações</Text>
      {transacoes && (
        <FlatList
          testID="transacoes"
          data={transacoes}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    flex: 1,
  },
  label: {
    fontSize: 16,
    paddingVertical: 10,
  },
  valor: {
    fontWeight: '600',
  },
});

Transacoes.defaultProp = {
  transacoes: [
    {
      transacao: '',
      valor: '0',
      data: '',
    },
  ],
};

Transacoes.propTypes = {
  transacoes: PropTypes.arrayOf(
    PropTypes.shape({
      tipo: PropTypes.string,
      valor: PropTypes.string,
      data: PropTypes.string,
    }),
  ),
};

export default Transacoes;
