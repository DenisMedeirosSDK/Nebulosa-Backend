# NEBULOSA - Backend

## Ferramentas usadas

* Typescript
* Typeorm
* PostgreSQL
* Node JS
* Docker
* Swagger

---
## Requisitos para executar

* NodeJs - versão v12.x - Necessário porta 3333 aberta
* NPM - versão v6.14.10
* PostgreSQL - versão v13.2 - Necessário usar porta 5432

---
## Como executar

```bash
git clone https://github.com/DenisMedeirosSDK/Nebulosa-Backend.git

cd Nebulosa-Backend
```
---
## Ambiente local



Instale as dependências:

``npm install``

Para executar as migrations:

``npm run typeorm migration:run``

Para iniciar a aplicação:

``npm run dev``


---
## Docker

Crie a imagem da aplicação

``docker build -t <nome da imagem> .``


Execute o docker compose da aplicação

``docker compose up -d``

// Para verificar se esta executando

``docker logs sozei -f``

// A seguinte mensagem aparecera *"Server start on port, 3333"*

Execute as  migrations para poder inserir dados no banco

Para executar as migrations

``npm run typeorm migration:run``

---
## Documentação de rotas

Para acessar a documentação de rotas, basta acessar ``http://localhost:3333/api-docs``

Também é possível fazer as requisições através do arquivo ``insomnia-nebulosa.json`` em .docs para o
[insomnia](https://insomnia.rest/).

Copie o conteúdo do arquivo depois dentro do insomnia terá uma opção **CREATE** clique em *Clipboard*

---

## Ajuda a nebulosa entrar em produção

- PIX - ``contato.denismedeiros@hotmail.com``

---
## Licença

Nebulosa uma a licença [BSD 3](LICENSE)
