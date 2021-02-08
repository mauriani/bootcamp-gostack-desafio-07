### RocketShoes


<img src="https://user-images.githubusercontent.com/32397288/103791535-54190200-5021-11eb-86dc-a97646046356.png" width="200"> | <img src="https://user-images.githubusercontent.com/32397288/103791552-58ddb600-5021-11eb-8406-d1a03d838aa1.png" width="200"> | 


### Projeto

Essa aplicação foi um desafio do modulo 07 do bootcamp da Rocketseat.

### Iniciando a Aplicação

```
$ git clone https://github.com/mauriani/RocketShoes-Mobile.git

```

- Depois disso acesse a pasta de cada do projeto e instale a dependências com o seguinte comando abaixo

```
$ yarn install # ou npm install

```

- Para dá start na aplicação precisamos deixar a api rodando juntamente com o nosso react. No caso do react native é necessário usar o ip da sua máquina já que a propria api está configurada da mesma forma.

```jsx
npx json-server --host 192.168.1.148 server.json 
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


