import React, { useState, useEffect } from 'react';

const Cadastro = () => {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem('tarefas')) || ['Estudar React', 'Fazer exercícios', 'Ler um livro']
  );
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [cor, setCor] = useState(localStorage.getItem('corFundo') || 'white');

  // Pergunta o nome do usuário toda vez que a página é carregada
  useEffect(() => {
    const nome = prompt('Qual é o seu nome?');
    if (nome) {
      setNomeUsuario(nome);
      localStorage.setItem('nomeUsuario', nome);
    }
  }, []);

  // Atualiza a cor de fundo e a cor do texto
  useEffect(() => {
    if (cor === 'white' || cor === 'cyan') {
      document.body.style.color = 'black';
    } else if (cor === 'black') {
      document.body.style.color = 'white';
    }
    document.body.style.backgroundColor = cor;
  }, [cor]);

  // Função para registrar a tarefa
  const handleRegistro = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Evita adicionar tarefa vazia
    const novasTarefas = [...tarefas, input];
    setTarefas(novasTarefas);
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
    setInput('');
  };

  // Função para excluir tarefa
  const handleExcluir = (tarefa) => {
    const tarefasRestantes = tarefas.filter((t) => t !== tarefa);
    setTarefas(tarefasRestantes);
    localStorage.setItem('tarefas', JSON.stringify(tarefasRestantes));
  };

  // Função para alterar a cor de fundo
  const handleCorChange = (e) => {
    const novaCor = e.target.value;
    setCor(novaCor);
    localStorage.setItem('corFundo', novaCor); 
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>{nomeUsuario}, sua lista de tarefas</h2>
      <form onSubmit={handleRegistro} style={{ marginBottom: '20px' }}>
        <label>Nome da tarefa:</label><br />
        <input
          type="text"
          name="tarefa"
          placeholder="Digite o nome da tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        /><br />
        <button type="submit">
          Registrar
        </button>
      </form>
      <br /><br />
      
      {/* Lista de tarefas e botão de exclusão */}
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {tarefa} <button onClick={() => handleExcluir(tarefa)}>Excluir</button>
          </li>
        ))}
      </ul>

      {/* Seção para escolher a cor de fundo */}
      <div>
        <h3>Escolha uma cor para o fundo da página:</h3>
        <div>
          <label htmlFor="black">
            <input
              type="radio"
              id="black"
              value="black"
              checked={cor === 'black'}
              onChange={handleCorChange}
              style={{ marginRight: '5px' }}
            />
            Preto
          </label>
        </div>
        <div>
          <label htmlFor="cyan">
            <input
              type="radio"
              id="cyan"
              value="cyan"
              checked={cor === 'cyan'}
              onChange={handleCorChange}
              style={{ marginRight: '5px' }}
            />
            Ciano
          </label>
        </div>
        <div>
        </div>
        <div>
          <label htmlFor="white">
            <input
              type="radio"
              id="white"
              value="white"
              checked={cor === 'white'}
              onChange={handleCorChange}
              style={{ marginRight: '5px' }}
            />
            Branco
          </label>
        </div>
        <div>
          <label htmlFor="red">
            <input
              type="radio"
              id="red"
              value="red"
              checked={cor === 'red'}
              onChange={handleCorChange}
              style={{ marginRight: '5px' }}
            />
            Vermelho
          </label>
        </div>
        <div>
          <label htmlFor="green">
            <input
              type="radio"
              id="green"
              value="green"
              checked={cor === 'green'}
              onChange={handleCorChange}
              style={{ marginRight: '5px' }}
            />
            Verde
          </label>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;