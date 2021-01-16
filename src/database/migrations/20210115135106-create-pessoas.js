'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoas', {
      idPessoa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      dataNascimento: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
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
    return queryInterface.dropTable("pessoas");
  }
};
