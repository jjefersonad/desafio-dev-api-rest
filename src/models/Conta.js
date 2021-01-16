const Sequelize = require('sequelize');
const database = require('./db');

const Conta = database.define('Conta', {
    idConta: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    idPessoa: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'pessoas',
            key: 'idPessoa'
        },
        allowNull: false
    },
    saldo: Sequelize.DataTypes.DECIMAL(12, 2),
    limiteSaqueDiario: Sequelize.DataTypes.DECIMAL(12, 2),
    flagAtivo: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true
    },
    tipoConta: Sequelize.DataTypes.INTEGER, //1-corrente; 2-poupança
    dataCriacao: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
    }
},
{
    tableName: 'contas',
    classMethods: {
        associate: function (models) {
            Conta.belongsTo(models.Pessoa, { foreignKey: 'idPessoa' });
        }
    }
});


module.exports = Conta;