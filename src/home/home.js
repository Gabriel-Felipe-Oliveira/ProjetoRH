let registros = [];

function registrarEntrada() {
  const nome = document.getElementById('nome').value;
  const entrada = new Date();
  registros.push({ nome, entrada });
  alert(`Entrada registrada para ${nome} às ${entrada.toLocaleTimeString()}`);
}


function registrarSaida() {
  const nome = document.getElementById('nome').value;
  const saida = new Date();

  for (let registro of registros) {
    if (registro.nome === nome && !registro.saida) {
      registro.saida = saida;
      alert(`Saída registrada para ${nome} às ${saida.toLocaleTimeString()}`);
      return;
    }
  }
  alert(`Não foi encontrada entrada registrada para ${nome}`);
}


function gerarRelatorio() {
  const listaRegistros = document.getElementById('registros');
  listaRegistros.innerHTML = ''; 
  for (let registro of registros) {
    const item = document.createElement('li');
    item.textContent = `${registro.nome} - Entrada: ${registro.entrada.toLocaleTimeString()}, Saída: ${registro.saida ? registro.saida.toLocaleTimeString() : 'Não registrada'}`;
    listaRegistros.appendChild(item);
  }
}
