# NEBULOSA - Backend

## Ferramentas usadas

- Typescript
- Typeorm
- PostgreSQL
- Node JS
- Docker
- Swagger

---

## Requisitos para executar

- [NodeJs](https://nodejs.org/en/) - versão v12.x - Necessário porta 3333 aberta
- NPM - versão v6.14.10
- [PostgreSQL](https://www.postgresql.org/download/) - versão v13.2 - Necessário usar porta 5432

---

## Como executar

```bash
git clone https://github.com/DenisMedeirosSDK/Nebulosa-Backend.git

cd Nebulosa-Backend

```

Remova _.example_ do arquivo `ormconfig.example.json` , deixando assim
`ormconfig.json` , caso necessário modifique as informações para seu ambiente.
Faça o mesmo com o arquivo `.env.example`

---

## Ambiente local

Instale as dependências:

`npm install`

Para executar as migrations:

`npm run typeorm migration:run`

Para iniciar a aplicação:

`npm run dev`

---

## Docker

Crie a imagem da aplicação

`docker build -t nebulosa-backend-app .`

Execute o docker compose da aplicação

`docker-compose up -d`

Para verificar se esta executando

`docker logs Nebulosa -f`

A seguinte mensagem aparecera: **Server start on APP_PORT**

Execute as migrations para poder inserir dados no banco

Para executar as migrations execute em seu terminal

`npm run typeorm migration:run`

---

## Documentação de rotas

Para acessar a documentação de rotas, basta acessar `http://localhost:3333/api-docs`

Também é possível fazer as requisições através do arquivo `insomnia-nebulosa.json` em **docs** para o
[insomnia](https://insomnia.rest/).

Copie o conteúdo do arquivo depois dentro do insomnia terá uma opção **CREATE** clique em _Clipboard_

---

## Licença

Nebulosa uma a licença [BSD 3](LICENSE)
