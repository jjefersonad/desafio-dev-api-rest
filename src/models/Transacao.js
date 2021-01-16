const Sequelize = require('sequelize');
const database = require('./db');

const Transacao = database.define('Transacao', {
    idTransacao: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    idConta: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'contas',
            key: 'idConta'
        },
        allowNull: false
    },
    valor: Sequelize.DataTypes.DECIMAL(12, 2),
    dataTransacao: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
    }
},
{
    tableName: 'transacoes'
});


module.exports = Transacao;