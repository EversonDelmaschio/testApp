const API_URL = 'http://localhost:3001';
const TRANSACOES_URI = `${API_URL}/transacoes`;
const CONTA_URI = `${API_URL}/conta`;

const conecta = (uri, options = {}) => {
  return fetch(uri, options).then(async resposta => {
    if (resposta.ok) {
      return await resposta.json();
    }

    throw new Error(resposta);
  });
};

const listaTransacoes = () => {
  try {
    return conecta(TRANSACOES_URI);
  } catch (e) {
    return [];
  }
};

const buscaSaldo = () => conecta(CONTA_URI).then(dados => dados.saldo);

const atualizaSaldo = saldo =>
  conecta(CONTA_URI, {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify({saldo}),
  });

const atualizaTransacoes = dados =>
  conecta(TRANSACOES_URI, {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(dados),
  });

export default {
  listaTransacoes,
  buscaSaldo,
  atualizaSaldo,
  atualizaTransacoes,
};
