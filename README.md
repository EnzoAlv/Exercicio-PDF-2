Cadastro de Tarefas

Este projeto é uma aplicação simples de cadastro de tarefas construída com React. A aplicação permite que os usuários adicionem, visualizem e excluam tarefas, além de personalizar a cor de fundo da página. O nome do usuário é solicitado toda vez que a página é carregada e é armazenado no localStorage.

Funcionalidades
Adicionar Tarefas: Os usuários podem adicionar novas tarefas digitando o nome da tarefa e clicando no botão "Registrar".
Excluir Tarefas: Cada tarefa na lista possui um botão "Excluir" que permite remover a tarefa da lista.
Personalizar Cor de Fundo: Os usuários podem escolher a cor de fundo da página entre várias opções (Preto, Ciano, CinzaTop, Branco, Vermelho, Verde).
Armazenamento Local: As tarefas e a cor de fundo selecionada são armazenadas no localStorage, permitindo que os dados persistam entre as sessões.
Solicitação de Nome: O nome do usuário é solicitado toda vez que a página é carregada e é armazenado no localStorage.
Estrutura do Código
Componentes
Cadastro.js
Estados:

input: Armazena o valor do campo de entrada para novas tarefas.
tarefas: Armazena a lista de tarefas. Inicialmente, é carregada do localStorage ou com algumas tarefas padrão.
nomeUsuario: Armazena o nome do usuário. É solicitado e armazenado no localStorage toda vez que a página é carregada.
cor: Armazena a cor de fundo selecionada. Inicialmente, é carregada do localStorage.
Efeitos:

useEffect para solicitar o nome do usuário e armazená-lo no localStorage.
useEffect para atualizar a cor de fundo e a cor do texto da página com base na cor selecionada.
Funções:

handleRegistro: Adiciona uma nova tarefa à lista e a armazena no localStorage.
handleExcluir: Remove uma tarefa da lista e atualiza o localStorage.
handleCorChange: Atualiza a cor de fundo da página e a armazena no localStorage.
Renderização:

Um formulário para adicionar novas tarefas.
Uma lista de tarefas com botões para excluir cada tarefa.
Um conjunto de botões de rádio para selecionar a cor de fundo da página.
Como Executar
Clone o repositório:
Navegue até o diretório do projeto:
Instale as dependências:
Execute a aplicação:
A aplicação estará disponível em http://localhost:3000.

Tecnologias Utilizadas
React
JavaScript
HTML
CSS (inline)




![print 1](https://github.com/user-attachments/assets/91af75db-3501-467a-bd84-88f98e2e9ed7)


![print 2](https://github.com/user-attachments/assets/92b6dd3b-d76e-47fb-bfef-c2398af8b036)


![print 3](https://github.com/user-attachments/assets/4e3f2df3-2782-4ed4-b0d1-55598bc46d9b)



