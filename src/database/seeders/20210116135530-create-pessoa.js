'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pessoas', [{
      nome: 'Teste',
      cpf: '00000000000',
      dataNascimento: '2021-01-15'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pessoas', null, {});
  }
};
