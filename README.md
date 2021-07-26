# Árvore | Teste Técnico Frontender

### :notebook_with_decorative_cover: Objetivo

Usando a API de Busca de Livros do Google, o candidato deve criar uma aplicação web responsiva em react.

As prateleiras da tela inicial são resultados de busca pelo título da prateleira, por exemplo, tomando o layout proposto teríamos 4 chamadas diferentes para a API.

Desconsiderar a parte de Filtros do layout.

##### API 
```url
https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10
```

Onde:

*q* - Termo a ser buscado. Ex: Aventura
*startIndex* - A posição de partida dentro da lista, default é 0.
*maxResults* - O número máximo de resultados. O default é 10, e o valor máximo permitido é 40.


---


#### :computer: Requisitos mínimos:

- Documentação do repositório git
- Histórico de commits
- React
- Boas práticas
- Reproduzir fielmente o layout
- Estilização baseada em CSS-IN-JS, exemplo: Styled Component


#### :sparkles: Requisitos desejáveis:

- Testes unitários
- React Hooks
- Paginação dos resultados

---

### :arrow_forward: Executando a aplicação

Para executar a aplicação localmente siga as instruções abaixo.

#### Pré-requisitos

Primeiramente é necessário que possua instalado as seguintes ferramentas: gerenciador de pacotes NPM e o Git.
Além disto é bom ter um editor para trabalhar com o código como VSCode.

#### Instalação

1. Faça uma cópia do repositório (HTTPS ou SSH)
   ```sh
   git clone https://github.com/andersonmalves/desafio-arvore.git
   ```

2. Acesse a pasta do repositório local e instale os pacotes necessários

   ```sh
   npm install
   ```

3. Na pasta do repositório local execute o comando para iniciar a aplicação

   ```sh
   npm start
   ```