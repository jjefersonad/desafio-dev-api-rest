'use strict';

module.exports = {
    username: "root",
    password: "conexao",
    database: "teste_dock",
    host: 'localhost',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}