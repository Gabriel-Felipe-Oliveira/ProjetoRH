


    let registros = [];

    function obterRegistrosDaSessao() {
        const registrosJSON = sessionStorage.getItem('registros');
        return registrosJSON ? JSON.parse(registrosJSON) : [];
    }

      // Função para salvar os registros na sessão do navegador
    function salvarRegistrosNaSessao(registros) {
        const registrosJSON = JSON.stringify(registros);
        sessionStorage.setItem('registros', registrosJSON);
    }

      // Função para registrar a entrada do funcionário
    function registrarEntrada() {
        const nome = document.getElementById('nome').value;
        const entrada = new Date();
        const registros = obterRegistrosDaSessao();
        registros.push({ nome, entrada });
        salvarRegistrosNaSessao(registros);
        alert(`Entrada registrada para ${nome} às ${entrada.toLocaleTimeString}`);
    }

      // Função para registrar a saída do funcionário
    function registrarSaida() {
        const nome = document.getElementById('nome').value;
        const saida = new Date();
        const registros = obterRegistrosDaSessao();
        // Procurar o registro do funcionário pelo nome e atualizar a hora de saída
        for (let registro of registros) {
        if (registro.nome === nome && !registro.saida) {
            registro.saida = saida;
            salvarRegistrosNaSessao(registros);
            alert(`Saída registrada para ${nome} às ${saida.toLocaleTimeString}`);
            return;
        }
        }
        alert(`Não foi encontrada entrada registrada para ${nome}`);
    }

      // Função para gerar o relatório
    function gerarRelatorio() {
        const listaRegistros = document.getElementById('registros');
        listaRegistros.innerHTML = ''; // Limpar o conteúdo anterior
        const registros = obterRegistrosDaSessao();
        for (let registro of registros) {
        const item = document.createElement('li');
        item.textContent = `${registro.nome} - Entrada: ${registro.entrada.toLocaleTimeString}, Saída: ${registro.saida ? registro.saida.toLocaleTimeString() : 'Não registrada'}`;
        listaRegistros.appendChild(item);
        }
    }

    window.onload = gerarRelatorio;
    
