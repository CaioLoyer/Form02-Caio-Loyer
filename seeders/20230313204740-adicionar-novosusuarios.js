'use strict';

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuarios', [
        {nome: 'Joao'},
        {nome: 'Danilo'},
        {nome: 'Pedro'},
        {nome: 'Andre'},
        {nome: 'Fabio'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
