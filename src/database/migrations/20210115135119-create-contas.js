'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('contas', {
      idConta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      idPessoa: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'pessoas',
          key: 'idPessoa'
        },
        allowNull: false
      },
      saldo: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(12, 2),
      },
      limiteSaqueDiario: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(12, 2),
      },
      flagAtivo: {
        allowNull: false,
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true,
      },
      tipoConta: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 1,
      },
      dataCriacao: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contas");
  }
};
