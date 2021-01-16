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

-- Na raiz do projeto rodar o comando:
```
npm install
```
-- Rodar o comando Migrate para criar as tabelas
```
npx sequelize-cli db:migrate
```

-- Caso deseje visualizar script SQL
```
/src/database/script.sql
```

-- Rodar o comando seeder para criar o registro de uma pessoa
```
npx sequelize-cli db:seed:all
```
