import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

function Transacao({data, tipo, valor}) {
  return (
    <View style={styles.container} testID="transacao-1">
      <View>
        <Text style={styles.label}>Tipo Movimen.</Text>
        <Text>{tipo}</Text>
      </View>
      <View>
        <Text style={styles.label}>Data</Text>
        <Text>{data}</Text>
      </View>
      <View>
        <Text style={styles.label}>Valor</Text>
        <Text style={styles.valor}>
          P$ {Number(valor).toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </View>
  );
}

Transacao.defaultProps = {
  tipo: '',
  valor: '0',
  data: '',
};

Transacao.propTypes = {
  tipo: PropTypes.string,
  valor: PropTypes.string,
  data: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: 'rgba(0, 111, 185, 0.2)',
  },
  label: {
    fontSize: 11,
    color: 'rgba(85, 85, 85, 1)',
    marginBottom: 4,
  },
  valor: {
    fontWeight: '600',
  },
});

export default Transacao;
