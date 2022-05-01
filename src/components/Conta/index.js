import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Conta = ({saldo, realizarTransacao}) => {
  const [number, onChangeNumber] = React.useState('');
  const [transationType, setTransationType] = React.useState('');

  const submitTransaction = () => {
    const transacao = {transacao: transationType, valor: number};
    const dataTransacao = new Date().toLocaleDateString('pt-br');
    realizarTransacao({...transacao, data: dataTransacao});
  };

  return (
    <View testID={'conta'} style={styles.container}>
      <View style={styles.saldoContainer}>
        <Text style={styles.saldo}>Saldo: </Text>
        <Text testID={'saldo'} style={{fontSize: 16}}>
          {saldo}
        </Text>
      </View>
      <Text>Selecione o tipo de transação:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          accessibilityLabel={'button-deposito'}
          style={{
            ...styles.button,
            backgroundColor:
              transationType === 'deposito'
                ? 'rgba(232, 170, 39, 1)'
                : '#DDDDDD',
          }}
          onPress={() => setTransationType('deposito')}>
          <Text>Depósito</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel={'button-saque'}
          style={{
            ...styles.button,
            backgroundColor:
              transationType === 'saque' ? 'rgba(232, 170, 39, 1)' : '#DDDDDD',
          }}
          onPress={() => setTransationType('saque')}>
          <Text>Saque</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        testID={'valor'}
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Informe o valor"
        keyboardType="numeric"
      />
      <TouchableOpacity
        testID={'button-transaction'}
        style={styles.buttonTransaction}
        onPress={submitTransaction}>
        <Text>Realizar transação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  button: {
    width: '45%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  buttonTransaction: {
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  saldo: {
    fontSize: 16,
    color: '#426fa2',
  },
  saldoContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
});

export default Conta;
