### RocketShoes


<img src="https://user-images.githubusercontent.com/32397288/103532074-589aba80-4e69-11eb-9a2f-a4a31799c6a7.png" > 
<img src="https://user-images.githubusercontent.com/32397288/103532105-65b7a980-4e69-11eb-875d-d0ef364c3c22.png" > 

### Projeto

Essa aplicação foi um desafio do modulo 07 do bootcamp da Rocketseat.

### Iniciando a Aplicação

```
$ git clone <https://github.com/mauriani/bootcamp-gostack-desafio-07>

```

- Depois disso acesse a pasta de cada do projeto e instale a dependências com o seguinte comando abaixo

```
$ yarn install # ou npm install

```

- Para dá start na aplicação precisamos deixar a api rodando juntamente com o nosso react.

```jsx
npx json-server server.json -p 3333
yarn start
```

### API

Para fazermos o processo de manipulação de uma api usamos **JsonServer**. Para usar no projeto precisamos criar um arquivo chamado server.json e ao dá start na aplicação a api tem que está rodando também.

Adicionando a biblioteca

```jsx
yarn global add json-server
```

Start 

```jsx
npx json-server server.json -p 3333
```

### Tecnologias utilizadas

- [x]  React-Native
- [x]  Redux
- [x]  Redux Saga
- [x]  Json Server
- [x]  Reactotron
