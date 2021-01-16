'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('transacoes', {
      idTransacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      idConta: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model:'contas',
          key: 'idConta'
        },
        allowNull: false
      },
      valor: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(12, 2),
      },
      dataTransacao: {
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
    return queryInterface.dropTable("transacoes");
  }
};
