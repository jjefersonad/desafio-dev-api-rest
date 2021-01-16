## API Rest em NodeJs e Sequelize

Trata-se de um modelo de API Rest utilizando Express, Sequelize e MySql. É um modelo de API que possui o crud de Pessoas, Contas e simula Trasações bancárias de consulta de saldo, depósito e saque.

## Versões

| Descriçãp | Versão |
|-|-|
| MySql | 5.7 |
| NodeJs | v14.15.3 |
| Sequelize | ^6.3.5 |
| mysql2 | ^2.2.5 |
| Express | ^4.17.1 |


## Configuração do projeto
- Alterar o arquivos de configuração do banco, subistituindo a configuração atual pela conexão com o banco Mysql que deseja:
```
* src/config/database.js
```

- Deve-se alterar os seguintes parâmetros:
```
* username: <usuario de acesso ao banco>
* password: <senha de acesso ao banco>
* database: <nome do bando de dados>
* host: <url ou ip do banco de dados>
```

## Comandos do terminal

- Na raiz do projeto rodar o comando:
```
npm install
```
- Rodar o comando Migrate para criar as tabelas
```
npx sequelize-cli db:migrate
```

- Caso deseje visualizar script SQL
```
src/database/script.sql
```

- Rodar o comando seeder para criar o registro de uma pessoa
```
npx sequelize-cli db:seed:all
```

- Iniciar o servidor node que poderá ser acessado pela url: http://localhost:4000
```
npm start
```

## Arquitetura de pastas
```

├── .gitignore
├── .nvmrc
├── .sequelizerc
├── index.js
├── package.json
├── readme.md
└── src
    ├── .DS_Store
    ├── config
    │   └── database.js
    ├── controllers
    │   ├── ContasController.js
    │   ├── PessoasController.js
    │   └── TransacoesController.js
    ├── database
    │   ├── .DS_Store
    │   ├── migrations
    │   │   ├── 20210115135106-create-pessoas.js
    │   │   ├── 20210115135119-create-contas.js
    │   │   └── 20210115135137-create-transacoes.js
    │   ├── script.sql
    │   └── seeders
    │       └── 20210116135530-create-pessoa.js
    ├── models
    │   ├── Conta.js
    │   ├── Pessoa.js
    │   ├── Transacao.js
    │   └── db.js
    └── routes
        └── routes.js

```

## Rotas vinculado a funcionalidade de Pessoas

- Listar pessoas
```
GET: http://localhost:4000/pessoas
```

- Cadastrar pessoa
```
POST: http://localhost:4000/pessoas
Body:
{
	"nome": "Jeferson de Araujo Damasceno",
	"cpf": "99999999997",
	"dataNascimento": "1984-03-13"
}
```

- Alterar pessoa
```
POST: http://localhost:4000/pessoas/<ID>
Body:
{
	"nome": "Jeferson de Araujo Damasceno",
	"cpf": "99999999997",
	"dataNascimento": "1984-03-13"
}
```

- Excluir pessoa
```
DELETE: http://localhost:4000/pessoas/<ID>
```

## Rotas vinculado a funcionalidade de Contas

- Listar Contas
```
GET: http://localhost:4000/contas
```

- Saldo Conta
```
GET: http://localhost:4000/contas/<ID>/saldo
```

- Bloqueio de Conta
```
GET: http://localhost:4000/contas/<ID>/bloqueio
```

- Cadastrar Conta
```
POST: http://localhost:4000/contas
Body:
{
	"idPessoa": 1,
	"saldo": 2000.00,
	"limiteSaqueDiario": 1000.00,
	"tipoConta":1
}
```

- Alterar Conta
```
POST: http://localhost:4000/contas/<ID>
Body:
{
	"idPessoa": 1,
	"saldo": 10000.00,
	"limiteSaqueDiario": 3000.50,
	"tipoConta":1
}
```

- Excluir Conta
```
DELETE: http://localhost:4000/contas/<ID>
```

## Rotas vinculado a funcionalidade de Transações

- Listar Extrato
```
GET: http://localhost:4000/extrato/<idConta>
```

- Depósito
```
POST: http://localhost:4000/deposito/<idConta>
Body:
{
	"valor": 50.00
}
```

- Saque
```
POST: http://localhost:4000/saque/<idConta>
Body:
{
	"valor": 50.00
}
```
