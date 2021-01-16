const Sequelize = require('sequelize');
const database = require('./db');

const Pessoa = database.define('Pessoa', {
    idPessoa: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    nome: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.STRING,
    dataNascimento: Sequelize.DataTypes.DATE,
},
{
    tableName: 'pessoas'
});


module.exports = Pessoa;